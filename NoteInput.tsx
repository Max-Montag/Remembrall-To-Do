import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { lightTheme, darkTheme, styles } from './styles';

type NoteInputProps = {
  addNote: (content: string, importance: number) => void;
};

const NoteInput: React.FC<NoteInputProps> = ({ addNote }) => {
  const [inputValue, setInputValue] = useState('');
  const [importance, setImportance] = useState(5);

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      addNote(inputValue, importance);
      setInputValue('');
      setImportance(5);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
        placeholder="Write a note..."
        placeholderTextColor={lightTheme.placeholder.color}
      />
      <TouchableOpacity onPress={handleAddNote} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteInput;
