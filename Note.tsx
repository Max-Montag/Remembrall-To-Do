import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

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
    <View style={styles[colorMode].note}>
      <Text style={styles[colorMode].noteText}>{note.content}</Text>
      <Text style={styles[colorMode].noteImportance}>Importance: {note.importance}</Text>
      <TouchableOpacity onPress={() => onDelete(note.id)} style={styles[colorMode].deleteButton}>
        <AntDesign name="delete" size={24} color={styles[colorMode].icon.color} />
      </TouchableOpacity>
    </View>
  );
};

export default Note;
