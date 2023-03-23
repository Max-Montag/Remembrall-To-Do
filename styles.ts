import {StyleSheet} from 'react-native'

export const lmc: {
  [key: number]: string
} = {
  5: '#C51427',
  4: '#F75F00',
  3: '#F3CE3A',
  2: '#75F99A',
  1: '#D4FBDF',
}
export const dmc: {
  [key: number]: string
} = {
  5: '#630A14',
  4: '#AD4300',
  3: '#DBB005',
  2: '#46955C',
  1: '#AAC9B2',
}

export const lightTheme = {
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  settingsHeader: {
    backgroundColor: '#f1f1f1',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    color: '#333',
  },
  placeholder: {
    color: '#aaa',
  },
  icon: {
    color: '#000',
  },
  iconsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  deleteButton: {
    backgroundColor: '#ccc',
  },
  todo: {
    backgroundColor: '#333',
  },
  todoText: {
    color: '#111',
  },
  todoPriority: {
    color: '#999',
  },
  addTodoButton: {
    backgroundColor: '#333',
    color: '#ccc',
  },
  searchInput: {
    backgroundColor: '#eee',
    color: '#222',
  },
  searchContainer: {
    backgroundColor: '#eee',
  },
  settingsText: {
    color: '#111',
  },
}

export const darkTheme = {
  container: {
    backgroundColor: '#333',
    flex: 1,
  },
  settingsHeader: {
    backgroundColor: '#333',
    color: '#fff',
  },
  input: {
    backgroundColor: '#666',
    color: '#fff',
  },
  placeholder: {
    color: '#aaa',
  },
  icon: {
    color: '#fff',
  },
  iconsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  deleteButton: {
    backgroundColor: '#444',
  },
  todo: {
    backgroundColor: '#fff',
  },
  todoText: {
    color: '#eee',
  },
  todoPriority: {
    color: '#999',
  },
  addTodoButton: {
    backgroundColor: '#666',
    color: '#ccc',
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#ccc',
  },
  searchContainer: {
    backgroundColor: '#333',
  },
  settingsText: {
    color: '#ccc',
  },
}

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 70,
  },
  editButton: {
    marginRight: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todo: {
    borderColor: '#000',
    borderWidth: 0,
    borderRadius: 10,
    padding: 15,
    margin: 5,
    marginTop: 0,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  todoTextInput: {
    marginRight: 30,
  },
  todoText: {
    borderBottomWidth: 0,
    fontSize: 16,
  },
  todoInput: {
    backgroundColor: '#eee',
    color: '#333',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    flexGrow: 1,
    padding: 5,
  },
  todoContentContainer: {
    flex: 1,
  },
  todoTextContainer: {
    marginRight: 30,
  },
  todoPriority: {
    color: '#000',
  },
  addTodoButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addTodoButtonWrapper: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  deleteButtonContainer: {
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  deleteButton: {
    borderRadius: 25,
    width: 25,
    height: 25,
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
  settingsText: {
    fontSize: 20,
  },
  row: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  priorityPicker: {
    width: 180,
  },
  pickerItemStyle: {
    fontSize: 5,
  },
})
