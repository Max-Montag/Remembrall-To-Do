import React, {useState, useContext, useEffect} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'
import {styles, lightTheme, darkTheme, lmc, dmc} from './styles'
import {EditModeContext} from './EditModeContext'
import {useTheme} from './ThemeContext'

type TodoProps = {
  todo: {
    id: number
    content: string
    priority: number
  }
  onDelete: (id: number) => void
  onUpdate: (id: number, content: string) => void
  colorMode: 'light' | 'dark'
}

const Todo: React.FC<TodoProps> = ({todo, onDelete, onUpdate}) => {
  const {colorMode} = useTheme()
  const theme = colorMode === 'light' ? lightTheme : darkTheme
  const [newContent, setNewContent] = useState(todo.content)
  const {editingTodoId, setEditingTodoId} = useContext(EditModeContext)
  const isEditing = editingTodoId === todo.id

  useEffect(() => {
    if (editingTodoId !== todo.id && newContent !== todo.content) {
      onUpdate(todo.id, newContent)
    }
  }, [editingTodoId, newContent])

  const handleEdit = () => {
    if (!isEditing) {
      setEditingTodoId(todo.id)
    }
  }

  const handleSave = () => {
    if (isEditing) {
      onUpdate(todo.id, newContent)
      setEditingTodoId(null)
    }
  }

  const handleChangeText = (text: string) => {
    setNewContent(text)
  }

  const getPriorityColor = () => {
    return theme === lightTheme
      ? lmc[todo.priority - 1]
      : dmc[todo.priority - 1]
  }

  return (
    <TouchableWithoutFeedback onPress={handleSave}>
      <View
        style={[
          styles.todo,
          {
            backgroundColor: getPriorityColor(),
          },
        ]}>
        <TouchableOpacity onPress={handleEdit} activeOpacity={1}>
          <View style={styles.todoContentContainer}>
            <View style={styles.todoTextContainer}>
              <TextInput
                style={[
                  styles.todoInput,
                  theme.todoText,
                  styles.todoText,
                  {
                    backgroundColor: getPriorityColor(),
                  },
                ]}
                value={newContent}
                onChangeText={handleChangeText}
              />
            </View>
            <Text style={theme.todoPriority}>{todo.priority}</Text>
          </View>
        </TouchableOpacity>
        {!isEditing && (
          <View style={styles.deleteButtonContainer}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => {
                onDelete(todo.id)
              }}></TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Todo
