import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput, ViewStyle, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { lightTheme, darkTheme, iconsContainer, noteContentContainer, note_, noteInput, deleteButton, deleteButtonContainer, deleteButtonText } from "./styles";
import { useContext } from 'react';
import { EditModeContext } from './EditModeContext';

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
  const { isEditing, setIsEditing } = useContext(EditModeContext);

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
    setNewContent(note.content);
    setIsEditing(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleCancel}>
      <View style={note_}>
        <TouchableOpacity onPress={handleEdit} activeOpacity={1}>
          <View style={noteContentContainer}>
            {isEditing ? (
              <>
                <TextInput
                  style={[noteInput, theme.noteInputBackground]}
                  value={newContent}
                  onChangeText={handleChangeText}
                />
              </>
            ) : (
              <>
                <Text style={theme.noteText}>{note.content}</Text>
                <Text style={theme.noteImportance}>
                  Priorität: {note.importance}
                </Text>
              </>
            )}
          </View>
        </TouchableOpacity>
        {!isEditing && (
          <View style={deleteButtonContainer}>
            <TouchableOpacity style={deleteButton} onPress={() => {onDelete(note.id);}}>
            <Text style={deleteButtonText}>x</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );  
};

export default Note;
