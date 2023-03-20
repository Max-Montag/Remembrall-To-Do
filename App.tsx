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
import NoteInput from './NoteInput';
import Note from './Note';
import { styles, lightTheme, darkTheme, themeToggleStyle } from './styles';

type Note = {
  id: number;
  content: string;
  importance: number;
};

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [input, setInput] = useState('');
  const [importance, setImportance] = useState<number>(5);
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

  const updateNote = (id: string, content: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, content } : note))
    );
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleTheme = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={theme.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <NoteInput
          addNote={addNote}
          input={input}
          setInput={setInput}
          importance={importance}
          setImportance={setImportance}
          colorMode={colorMode}
        />
  
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onUpdate={updateNote}
            colorMode={colorMode}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={toggleTheme}
        style={[
          theme.toggleThemeButton as ViewStyle,
          themeToggleStyle,
        ]}
      >
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