import React, {useState, useContext} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'
import {styles, lightTheme, darkTheme, lmc, dmc} from './styles'
import {EditModeContext} from './EditModeContext'

type NoteProps = {
  note: {
    id: number
    content: string
    importance: number
  }
  onDelete: (id: number) => void
  onUpdate: (id: number, content: string) => void
  colorMode: 'light' | 'dark'
}

const Note: React.FC<NoteProps> = ({note, onDelete, onUpdate, colorMode}) => {
  const theme = colorMode === 'light' ? lightTheme : darkTheme
  const [newContent, setNewContent] = useState(note.content)
  const {editingNoteId, setEditingNoteId} = useContext(EditModeContext)
  const isEditing = editingNoteId === note.id

  const handleEdit = () => {
    if (!isEditing) {
      setEditingNoteId(note.id)
    }
  }

  const handleSave = () => {
    if (isEditing) {
      onUpdate(note.id, newContent)
      setEditingNoteId(null)
    }
  }

  const handleChangeText = (text: string, isEditing: boolean) => {
    setNewContent(text)
    if (isEditing) {
      setEditingNoteId(null)
    }
  }

  const getImportanceColor = () => {
    return theme === lightTheme
      ? lmc[note.importance - 1]
      : dmc[note.importance - 1]
  }

  return (
    <TouchableWithoutFeedback onPress={handleSave}>
      <View
        style={[
          styles.note,
          {
            backgroundColor: getImportanceColor(),
          },
        ]}>
        <TouchableOpacity onPress={handleEdit} activeOpacity={1}>
          <View style={styles.noteContentContainer}>
            <View style={styles.noteTextContainer}>
              <TextInput
                style={[
                  styles.noteInput,
                  theme.noteText,
                  styles.noteText,
                  {
                    backgroundColor: getImportanceColor(),
                  },
                ]}
                value={newContent}
                onChangeText={text => handleChangeText(text, isEditing)}
                onBlur={handleSave}
                multiline
              />
            </View>
            <Text style={theme.noteImportance}>{note.importance}</Text>
          </View>
        </TouchableOpacity>
        {!isEditing && (
          <View style={styles.deleteButtonContainer}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => {
                onDelete(note.id)
              }}></TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Note
