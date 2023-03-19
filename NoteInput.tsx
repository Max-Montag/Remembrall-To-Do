import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

type NoteInputProps = {
  addNote: (content: string) => void;
};

const NoteInput: React.FC<NoteInputProps> = ({ addNote }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      addNote(inputValue);
      setInputValue('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
        placeholder="Write a note..."
      />
      <TouchableOpacity onPress={handleAddNote} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteInput;
