import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput,TouchableWithoutFeedback } from "react-native";
import { lightTheme, darkTheme, noteContentContainer, note_, noteInput, deleteButton, deleteButtonContainer, deleteButtonText } from "./styles";

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
    if (isEditing) {
      onUpdate(note.id, newContent);
      setIsEditing(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleSave}>
      <View style={note_}>
        <TouchableOpacity onPress={handleEdit} activeOpacity={1}>
          <View style={noteContentContainer}>
            {isEditing ? (
              <>
                <TextInput
                  style={[noteInput, theme.noteInputBackground]}
                  value={newContent}
                  onChangeText={handleChangeText}
                  onBlur={handleSave} // Add this line
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