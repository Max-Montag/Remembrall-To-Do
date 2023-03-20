import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { lightTheme, darkTheme, styles } from './styles';

type NoteProps = {
  note: {
    id: string;
    content: string;
    importance: number;
  };
  onDelete: (id: string) => void;
  colorMode: "light" | "dark";
};

const Note: React.FC<NoteProps> = ({ note, onDelete, colorMode }) => {
  return (
    <View style={lightTheme.note}>
      <Text style={lightTheme.noteText}>{note.content}</Text>
      <Text style={lightTheme.noteImportance}>Importance: {note.importance}</Text>
      <TouchableOpacity onPress={() => onDelete(note.id)} style={styles.addButton}>
        <AntDesign name="delete" size={24} color={lightTheme.icon.color} />
      </TouchableOpacity>
    </View>
  );
};

export default Note;
