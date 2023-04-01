import React, {useState, useEffect, useContext} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ViewStyle,
} from 'react-native'
import {useNavigation, NavigationProp} from '@react-navigation/native'
import PushNotification from 'react-native-push-notification'
import {createNotificationChannels} from './pushNotificationChannels'
import {setNavigationBarColor} from './androidNavbarColor'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Todo from './Todo'
import {lightTheme, darkTheme, styles} from './styles'
import {EditModeContext} from './EditModeContext'
import {useTheme} from './ThemeContext'
import Screwdriver from './img/icons/Screwdriver'
import JournalPlus from './img/icons/JournalPlus'

const maxNotificationCount = 50

type Todo = {
  id: number
  content: string
  priority: number
  ticked: boolean
}

type TodoListNavigationProp = NavigationProp<
  {
    TodoList: undefined
    Settings: undefined
  },
  'TodoList'
>

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [scheduling, setScheduling] = useState(Boolean)
  const {editingTodoId, setEditingTodoId} = useContext(EditModeContext)
  const {colorMode, setColorMode} = useTheme()
  const theme = colorMode === 'light' ? lightTheme : darkTheme
  const navigation = useNavigation<TodoListNavigationProp>()
  const [pickerValues, setPickerValues] = useState({
    picker1: 3,
    picker2: 12,
    picker3: 24,
    picker4: 48,
  })

  const loadTheme = async () => {
    try {
      const colorMode = await AsyncStorage.getItem('colorMode')

      if (colorMode !== null) {
        setNavigationBarColor(colorMode === 'dark' ? true : false)
        setColorMode(colorMode as 'light' | 'dark')
      }
    } catch (error) {
      console.error('Error loading todos:', error)
    }
  }

  useEffect(() => {
    loadTheme()
  }, [])

  useEffect(() => {
    loadTodos()
    createNotificationChannels()
    ;(async () => {
      const storedPickerValues = await AsyncStorage.getItem('pickerValues')
      if (storedPickerValues) {
        setPickerValues(JSON.parse(storedPickerValues))
      }
    })()
  }, [])

  const getNotificationInterval = (priority: number) => {
    switch (priority) {
      case 5:
        return pickerValues.picker1 * 60 * 60 * 1000
      case 4:
        return pickerValues.picker2 * 60 * 60 * 1000
      case 3:
        return pickerValues.picker3 * 60 * 60 * 1000
      case 2:
        return pickerValues.picker4 * 60 * 60 * 1000
      default:
        return 96 * 60 * 60 * 1000
    }
  }

  const scheduleNotifications = () => {
    if (!scheduling) {
      setScheduling(true)
      setTimeout(() => {
        PushNotification.cancelAllLocalNotifications()

        if (uncompletedTodos.length > 0) {
          for (
            let i = 0;
            i < maxNotificationCount / uncompletedTodos.length;
            i++
          ) {
            uncompletedTodos.forEach(todo => {
              const interval = getNotificationInterval(todo.priority)
              const notificationTime = new Date(Date.now() + interval * (i + 1))

              PushNotification.localNotificationSchedule({
                channelId: 'default-channel',
                title: `Nicht vergessen!`,
                message: todo.content,
                date: notificationTime,
                allowWhileIdle: true,
                playSound: true,
                soundName: 'default',
                vibrate: true,
              })
            })
          }
        }
        setScheduling(false)
      }, 1000)
    }
  }

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem('todos')
      if (storedTodos !== null) {
        setTodos(JSON.parse(storedTodos))
        scheduleNotifications()
      }
    } catch (error) {
      console.error('Error loading todos:', error)
    }
  }

  const saveTodos = async (todosToSave: Todo[]) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todosToSave))
    } catch (error) {
      console.error('Error saving todos:', error)
    }
  }

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      content: '',
      priority: 2,
      ticked: false,
    }
    const updatedTodos = [newTodo, ...todos]
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
    scheduleNotifications()
    setEditingTodoId(newTodo.id)
  }

  const updateTodo = (id: number, content: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, content} : todo,
    )
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  const updateTodoPriority = (id: number, priority: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, priority} : todo,
    )
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
    scheduleNotifications()
  }

  const tickTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, ticked: !todo.ticked} : todo,
    )
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
    scheduleNotifications()
  }

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  const handleSearchChange = (text: string) => {
    setSearchQuery(text)
  }

  const filteredTodos = todos.filter(
    todo =>
      !todo.ticked &&
      todo.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const completedTodos = todos.filter(
    todo =>
      todo.ticked === true &&
      todo.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const uncompletedTodos = todos.filter(todo => todo.ticked === false)

  return (
    <View style={[theme.searchContainer, {flex: 1}]}>
      <View style={[styles.searchContainer, theme.searchContainer]}>
        <TextInput
          style={[styles.searchInput, theme.searchInput]}
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder='Suchen'
          placeholderTextColor={theme.placeholder.color}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={styles.themeToggle}>
          <Screwdriver color={theme.icon.color} width={24} height={24} />
        </TouchableOpacity>
      </View>
      <ScrollView style={theme.container} keyboardDismissMode='none'>
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => {}}
            onTick={tickTodo}
            onUpdate={updateTodo}
            onPriorityChange={updateTodoPriority}
            isCompleted
          />
        ))}
        {completedTodos.length > 0 && (
          <View>
            <View style={styles.separator} />
            <View style={styles.separatorTextWrapper}>
              <Text style={[theme.separatorText, styles.separatorText]}>
                Erledigt
              </Text>
            </View>
            {completedTodos.map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onTick={tickTodo}
                onUpdate={updateTodo}
                onPriorityChange={updateTodoPriority}
                isCompleted
              />
            ))}
          </View>
        )}
      </ScrollView>
      <View style={styles.addTodoButtonWrapper}>
        <TouchableOpacity
          onPress={addTodo}
          style={[styles.addTodoButton, theme.addTodoButton as ViewStyle]}>
          <JournalPlus
            color={theme.addTodoButton.color}
            width={24}
            height={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoList
