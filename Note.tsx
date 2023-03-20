import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { lightTheme, darkTheme, styles } from "./styles";

type NoteProps = {
  note: {
    id: number;
    content: string;
    importance: number;
  };
  onDelete: (id: number) => void;
  colorMode: "light" | "dark";
};

const Note: React.FC<NoteProps> = ({ note, onDelete, colorMode }) => {
  const theme = colorMode === "light" ? lightTheme : darkTheme;

  return (
    <View style={theme.note}>
      <Text style={theme.noteText}>{note.content}</Text>
      <Text style={theme.noteImportance}>
        Wichtigkeit: {note.importance}
      </Text>
      <TouchableOpacity onPress={() => onDelete(note.id)}>
        <MaterialIcons name="delete" size={24} color={theme.icon.color} />
      </TouchableOpacity>
    </View>
  );
};

export default Note;
