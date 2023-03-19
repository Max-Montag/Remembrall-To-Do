import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

type NoteProps = {
  note: {
    id: number;
    content: string;
    importance: number;
  };
  deleteNote: (id: number) => void;
  updateImportance: (id: number, value: number) => void;
};

const Note: React.FC<NoteProps> = ({ note, deleteNote, updateImportance }) => {
  return (
    <View style={styles.note}>
      <Text style={styles.noteText}>{note.content}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        step={1}
        value={note.importance}
        onValueChange={(value) => updateImportance(note.id, value)}
        minimumTrackTintColor="#6200EE"
        maximumTrackTintColor="#ccc"
      />
      <TouchableOpacity onPress={() => deleteNote(note.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Note;
