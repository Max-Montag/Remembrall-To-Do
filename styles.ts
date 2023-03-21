import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const lightTheme = {
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  input: {
    backgroundColor: '#fff',
    color: '#333',
  },
  placeholder: {
    color: '#aaa',
  },
  importance: {
    color: '#333',
  },
  picker: {
    color: '#333',
  },
  icon: {
    color: '#000',
  },
  iconsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  addButton: {
    backgroundColor: '#333'
  },
  deleteButton: {
    backgroundColor: "#ccc",
  },
  note: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
  },
  noteText: {
    color: '#000',
  },
  noteInputBackground: {
    backgroundColor: '#f1f1f1',
  },
  noteImportance: {
    color: '#999',
  },
  toggleThemeButton: {
    backgroundColor: '#333',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    alignSelf: 'flex-end',
  },
};

export const darkTheme = {
  container: {
    backgroundColor: '#333',
    flex: 1,
  },
  input: {
    backgroundColor: '#666',
    color: '#fff',
  },
  placeholder: {
    color: '#aaa',
  },
  importance: {
    color: '#fff',
  },
  picker: {
    color: '#fff',
  },
  icon: {
    color: '#fff',
  },
  iconsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  addButton: {
    backgroundColor: '#666',
    color: '#999',
  },
  deleteButton: {
    backgroundColor: "#444",
  },
  note: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
  },
  noteText: {
    color: '#fff',
  },
  noteInputBackground: {
    backgroundColor: '#333',
  },
  noteImportance: {
    color: '#999',
  },
  toggleThemeButton: {
    backgroundColor: '#666',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    alignSelf: 'flex-end',
  },
};

export const styles = StyleSheet.create({  
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 20,
    marginTop: 20,
  },
  inputOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  picker: {
    flex: 1,
  },
  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  fullWidthTextInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 10,
    height: 70,
    textAlignVertical: 'top', // Android
  },
  editButton: {
    marginRight: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  note: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
  },
  noteText: {
    color: '#000',
  },
  noteImportance: {
    color: '#000',
  },
  toggleThemeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export const themeToggleStyle: ViewStyle = {
  position: "absolute",
  bottom: 30,
  right: 30,
};

export const noteContentContainer = {
  flex: 1,
};

export const iconsContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: 60,
};

export const note_: ViewStyle = {
  borderColor: '#000',
  borderWidth: 1,
  borderRadius: 10,
  padding: 15,
  margin: 5,
  marginTop: 0,
  flexDirection: "row",
  alignItems: "stretch",
};

export const noteInput: TextStyle = {
  backgroundColor: "#eee",
  color: "#333",
  borderBottomColor: "#bbb",
  borderBottomWidth: 1,
  flexGrow: 1,
  padding: 5,
};

export const deleteButtonContainer: ViewStyle = {
  justifyContent: "center",
  marginLeft: "auto",
};

export const deleteButton: ViewStyle = {
  borderRadius: 15,
  width: 20,
  height: 20,
  justifyContent: "center",
  alignItems: "center",
  borderColor: '#666',
  borderWidth: 1,
};

export const deleteButtonText: TextStyle = {
  color: "#888",
  fontWeight: "200",
  fontSize: 15,
  lineHeight: 15,
};

