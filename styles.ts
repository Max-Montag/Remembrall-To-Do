import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#6200EE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#6200EE',
    fontSize: 18,
    padding: 5,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  notesList: {
    paddingHorizontal: 20,
  },
  note: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  noteText: {
    fontSize: 18,
  },
  deleteButton: {
    color: '#FF0000',
    fontSize: 16,
  },
  slider: {
    flex: 1,
    marginRight: 10,
  },
});
