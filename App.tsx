import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import NoteInput from './NoteInput';
import Note from './Note';

type NoteType = {
  id: number;
  content: string;
  importance: number;
};

function App(): JSX.Element {
  const [notes, setNotes] = useState<NoteType[]>([]);

  const addNote = (content: string) => {
    const newNote: NoteType = {
      id: Date.now(),
      content,
      importance: 5,
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const updateImportance = (id: number, value: number) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, importance: value } : note
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Awesome Notes</Text>
      </View>
      <NoteInput addNote={addNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <Note
            note={item}
            deleteNote={deleteNote}
            updateImportance={updateImportance}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.notesList}
      />
    </SafeAreaView>
  );
}

export default App;
