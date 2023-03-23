import React, {useState, useEffect} from 'react'
import {
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ViewStyle,
} from 'react-native'
import {useNavigation, NavigationProp} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Todo from './Todo'
import {lightTheme, darkTheme, styles} from './styles'
import {useTheme} from './ThemeContext'
import Screwdriver from './img/icons/Screwdriver'
import JournalPlus from './img/icons/JournalPlus'
import PushNotification from 'react-native-push-notification'
import {createNotificationChannels} from './pushNotificationChannels'

type Todo = {
  id: number
  content: string
  importance: number
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
  const [input, setInput] = useState('')
  const [importance, setImportance] = useState<number>(5)
  const [searchQuery, setSearchQuery] = useState('')
  const {colorMode} = useTheme()
  const theme = colorMode === 'light' ? lightTheme : darkTheme
  const navigation = useNavigation<TodoListNavigationProp>()

  useEffect(() => {
    loadTodos()
  }, [])

  useEffect(() => {
    createNotificationChannels()
    scheduleNotifications()
  }, [todos])

  const showNotification = (): void => {
    PushNotification.localNotification({
      channelId: 'default-channel',
      title: 'He Du :)',
      message: 'Du Your stuff! :O',
      playSound: true,
      soundName: 'default',
      vibrate: true,
    })
  }

  const getNotificationInterval = (priority: number) => {
    switch (priority) {
      case 5:
        return 15 * 60 * 1000 // 15 min
      case 4:
        return 30 * 60 * 1000 // 30 min
      case 3:
        return 45 * 60 * 1000 // 30 min
      case 2:
        return 60 * 60 * 1000 // 60 min
      default:
        return 120 * 60 * 1000 // 120 min
    }
  }

  const scheduleNotifications = () => {
    PushNotification.cancelAllLocalNotifications()
    todos.forEach(todo => {
      console.log(todo.importance)
      const interval = getNotificationInterval(todo.importance)

      PushNotification.localNotificationSchedule({
        channelId: 'default-channel',
        title: `Erinnerung: ${todo.id}`,
        message: todo.content,
        date: new Date(Date.now() + interval),
        allowWhileIdle: true,
        playSound: true,
        soundName: 'default',
        vibrate: true,
      })
    })
  }

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem('todos')
      if (storedTodos !== null) {
        setTodos(JSON.parse(storedTodos))
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
      content: 'New Todo',
      importance: 4,
    }

    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
    setInput('')
    setImportance(5)

    showNotification()
  }

  const updateTodo = (id: number, content: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, content} : todo,
    )
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  const handleSearchChange = (text: string) => {
    setSearchQuery(text)
  }

  const filteredTodos = todos.filter(todo =>
    todo.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <View style={[theme.searchContainer, {flex: 1}]}>
      <View style={[styles.searchContainer, theme.searchContainer]}>
        <TextInput
          style={[styles.searchInput, theme.searchInput]}
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder='Search todos'
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
            onDelete={deleteTodo}
            onUpdate={updateTodo}
            colorMode={colorMode}
          />
        ))}
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
