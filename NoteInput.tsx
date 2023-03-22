import React from 'react'
import {Picker} from '@react-native-picker/picker'
import {View, TextInput, TouchableOpacity, Text} from 'react-native'
import {lightTheme, darkTheme, styles} from './styles'

type NoteInputProps = {
  addNote: () => void
  input: string
  setInput: (value: string) => void
  importance: number
  setImportance: (value: number) => void
  colorMode: 'light' | 'dark'
}

const NoteInput: React.FC<NoteInputProps> = ({
  addNote,
  input,
  setInput,
  importance,
  setImportance,
  colorMode,
}) => {
  const theme = colorMode === 'light' ? lightTheme : darkTheme

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={[theme.input, styles.fullWidthTextInput]}
        placeholder='To-Do hinzufügen...'
        placeholderTextColor={theme.placeholder.color}
        multiline
      />
      <View style={styles.inputOptionsContainer}>
        <Picker
          selectedValue={importance}
          style={[theme.picker, styles.picker]}
          onValueChange={(itemValue, itemIndex) =>
            setImportance(Number(itemValue))
          }>
          <Picker.Item label='Extrem hoch' value={1} />
          <Picker.Item label='Sehr hoch' value={2} />
          <Picker.Item label='hoch' value={3} />
          <Picker.Item label='normal' value={4} />
          <Picker.Item label='Aufschiebbar' value={5} />
        </Picker>

        <TouchableOpacity
          onPress={addNote}
          style={[theme.addButton, styles.addButton]}>
          <Text style={styles.addButtonText}>Hinzufügen</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NoteInput
