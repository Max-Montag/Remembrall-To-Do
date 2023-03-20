import { StyleSheet } from 'react-native';

export const lightTheme = {
  container: {
    backgroundColor: '#f1f1f1',
  },
  input: {
    backgroundColor: '#fff',
    color: '#333',
  },
  placeholder: {
    color: '#aaa
  },
  importance: {
    color: '#333',
  },
  picker: {
    color: '#333',
  },
  icon: {
    color: '#333',
  },
  note: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  noteText: {
    color: '#333',
  },
  noteImportance: {
    color: '#333',
  },
  toggleThemeButton: {
    backgroundColor: '#333',
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
};

export const darkTheme = {
  container: {
    backgroundColor: '#333',
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
  note: {
    backgroundColor: '#666',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  noteText: {
    color: '#fff',
  },
  noteImportance: {
    color: '#fff',
  },
  toggleThemeButton: {
    backgroundColor: '#666',
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
};

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
