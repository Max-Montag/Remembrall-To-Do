import {StyleSheet, ViewStyle, TextStyle} from 'react-native'

export const lmc = ['#C51427', '#F75F00', '#F3CE3A', '#75F99A', '#D4FBDF']
export const dmc = ['#630A14', '#AD4300', '#DBB005', '#46955C', '#AAC9B2']

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
    backgroundColor: '#333',
  },
  deleteButton: {
    backgroundColor: '#ccc',
  },
  note: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
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
  addNoteButton: {
    backgroundColor: '#333',
  },
}

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
    backgroundColor: '#444',
  },
  note: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
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
  addNoteButton: {
    backgroundColor: '#666',
  },
}

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
    borderColor: '#000',
    borderWidth: 0,
    borderRadius: 10,
    padding: 15,
    margin: 5,
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  noteText: {
    color: '#000',
  },
  noteTextInput: {
    marginRight: 30,
  },
  noteInput: {
    backgroundColor: '#eee',
    color: '#333',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    flexGrow: 1,
    padding: 5,
  },
  noteContentContainer: {
    flex: 1,
  },
  noteTextContainer: {
    marginRight: 30,
  },
  noteImportance: {
    color: '#000',
  },
  addNoteButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  deleteButtonContainer: {
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  deleteButton: {
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#666',
    borderWidth: 1,
  },
  deleteButtonText: {
    color: '#888',
    fontWeight: '200',
    fontSize: 15,
    lineHeight: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 9,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  themeToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 60,
  },
})
