import React, { useState } from 'react';
import { ViewStyle } from 'react-native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { styles, lightTheme, darkTheme } from './styles';

type Note = {
  id: number;
  content: string;
  importance: number;
};

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [input, setInput] = useState('');
  const [importance, setImportance] = useState(5);
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const theme = colorMode === 'light' ? lightTheme : darkTheme;

  const addNote = () => {
    if (input.trim() !== '') {
      const newNote: Note = {
        id: Date.now(),
        content: input,
        importance: importance,
      };

      setNotes([...notes, newNote]);
      setInput('');
      setImportance(5);
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleTheme = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={theme.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          style={theme.input}
          placeholder="Notiz hinzufügen..."
          placeholderTextColor={theme.placeholder.color}
        />
        <Picker
          selectedValue={importance}
          style={theme.picker}
          onValueChange={(itemValue) => setImportance(itemValue)}
        >
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
        </Picker>
        <TouchableOpacity onPress={addNote} style={styles.addButton}>
          <Text style={styles.addButtonText}>Hinzufügen</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {notes.map((note) => (
          <View key={note.id} style={theme.note}>
            <Text style={theme.noteText}>{note.content}</Text>
            <Text style={theme.noteImportance}>Wichtigkeit: {note.importance}</Text>
            <TouchableOpacity onPress={() => deleteNote(note.id)}>
              <MaterialIcons name="delete" size={24} color={theme.icon.color} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={toggleTheme} style={theme.toggleThemeButton as ViewStyle}>
        <MaterialIcons
          name={colorMode === 'light' ? 'brightness-3' : 'brightness-7'}
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
