import React, {useState, useContext, useEffect} from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'
import {styles, lightTheme, darkTheme, lmc, dmc, tmc} from './styles'
import {EditModeContext} from './EditModeContext'
import {useTheme} from './ThemeContext'
import {Picker} from '@react-native-picker/picker'

type TodoProps = {
  todo: {
    id: number
    content: string
    priority: number
    ticked: boolean
  }
  onDelete: (id: number) => void
  onTick: (id: number) => void
  onUpdate: (id: number, content: string) => void
  onPriorityChange: (id: number, priority: number) => void
  isCompleted: boolean
}

const Todo: React.FC<TodoProps> = ({
  todo,
  onDelete,
  onTick,
  onUpdate,
  onPriorityChange,
}) => {
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

  const handlePriorityChange = (itemValue: number) => {
    onPriorityChange(todo.id, itemValue)
  }

  const getPriorityColor = () => {
    if (todo.ticked === false)
      return theme === lightTheme ? lmc[todo.priority] : dmc[todo.priority]
    return tmc[todo.priority]
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
                multiline
              />
            </View>
            <Picker
              selectedValue={todo.priority}
              onValueChange={handlePriorityChange}
              style={[styles.priorityPicker]}
              itemStyle={styles.pickerItemStyle}
              mode='dropdown'>
              <Picker.Item label='Extrem Hoch' value={5} />
              <Picker.Item label='Sehr Hoch' value={4} />
              <Picker.Item label='Hoch' value={3} />
              <Picker.Item label='Normal' value={2} />
              <Picker.Item label='Niedrig' value={1} />
            </Picker>
          </View>
        </TouchableOpacity>
        <View style={styles.deleteButtonContainer}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => {
              onTick(todo.id)
            }}></TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Todo
