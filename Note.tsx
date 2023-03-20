import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { lightTheme, darkTheme, styles, iconsContainer } from "./styles";


type NoteProps = {
  note: {
    id: number;
    content: string;
    importance: number;
  };
  onDelete: (id: number) => void;
  onUpdate: (id: number, content: string) => void;
  colorMode: "light" | "dark";
};

const Note: React.FC<NoteProps> = ({ note, onDelete, onUpdate, colorMode }) => {
  const theme = colorMode === "light" ? lightTheme : darkTheme;
  const [newContent, setNewContent] = useState(note.content);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChangeText = (text: string) => {
    setNewContent(text);
  };

  const handleSave = () => {
    if (newContent.trim() !== "") {
      onUpdate(note.id, newContent);
      setIsEditing(false);
    } else {
      Alert.alert("Fehler", "Der Inhalt darf nicht leer sein.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <View style={theme.note}>
      {isEditing ? (
        <>
          <TextInput
            style={theme.input}
            value={newContent}
            onChangeText={handleChangeText}
          />
          <TouchableOpacity onPress={handleSave}>
            <MaterialIcons name="save" size={24} color={theme.icon.color} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCancel}>
            <MaterialIcons name="cancel" size={24} color={theme.icon.color} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={theme.noteText}>{note.content}</Text>
          <Text style={theme.noteImportance}>
            Wichtigkeit: {note.importance}
          </Text>
          <View style={iconsContainer}>
            <TouchableOpacity onPress={handleEdit}>
              <MaterialIcons name="edit" size={24} color={theme.icon.color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(note.id)}>
              <MaterialIcons
                name="delete"
                size={24}
                color={theme.icon.color}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Note;
