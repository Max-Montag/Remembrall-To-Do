import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, TextInput,TouchableWithoutFeedback } from "react-native";
import { styles, lightTheme, darkTheme, lmc, dmc, noteContentContainer, note_, noteInput, deleteButton, deleteButtonContainer, deleteButtonText } from "./styles";
import { EditModeContext } from "./EditModeContext";

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
  const { editingNoteId, setEditingNoteId } = useContext(EditModeContext);
  const isEditing = editingNoteId === note.id;
  
  const handleEdit = () => {
  if (!isEditing) {
  setEditingNoteId(note.id);
  }
  };
  
  const handleSave = () => {
  if (isEditing) {
  onUpdate(note.id, newContent);
  setEditingNoteId(null);
  }
  };
  
  const handleChangeText = (text: string, isEditing: boolean) => {
  setNewContent(text);
  if (isEditing) {
  setEditingNoteId(null);
  }
  };
  
  return (
  <TouchableWithoutFeedback onPress={handleSave}>
  <View
  style={[
  note_,
  {
  backgroundColor:
  theme === lightTheme
  ? lmc[note.importance - 1]
  : dmc[note.importance - 1],
  },
  ]}
  >
  <TouchableOpacity onPress={handleEdit} activeOpacity={1}>
  <View style={noteContentContainer}>
  {isEditing ? (
  <>
  <View style={styles.noteTextContainer}>
  <TextInput
  style={[
  noteInput,
  theme.noteInputBackground,
  isEditing ? { borderBottomWidth: 0 } : { borderBottomWidth: 1 },
  ]}
  value={newContent}
  onChangeText={(text) => handleChangeText(text, isEditing)}
  onBlur={handleSave}
  />
  </View>
  <Text style={theme.noteImportance}>
  {note.importance}
  </Text>
  </>
  ) : (
  <>
  <View style={styles.noteTextContainer}>
  <Text style={theme.noteText}>{note.content}</Text>
  <Text style={theme.noteImportance}>
  {note.importance}
  </Text>
  </View>
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