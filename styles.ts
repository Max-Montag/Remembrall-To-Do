import { StyleSheet } from 'react-native';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#A9A9A9',
  lightGray: '#E0E0E0',
  darkGray: '#696969',
};

export const colorModeStyles = {
  light: {
    container: {
      backgroundColor: colors.white,
    },
    headerText: {
      color: colors.black,
    },
    icon: {
      color: colors.black,
    },
    input: {
      backgroundColor: colors.lightGray,
      color: colors.black,
    },
    placeholder: {
      color: colors.gray,
    },
    importance: {
      backgroundColor: colors.lightGray,
      color: colors.black,
    },
    importancePickerItem: {
      color: colors.black,
    },
    note: {
      backgroundColor: colors.lightGray,
    },
    noteText: {
      color: colors.black,
    },
    noteImportance: {
      color: colors.black,
    },
  },
  dark: {
    container: {
      backgroundColor: colors.black,
    },
    headerText: {
      color: colors.white,
    },
    icon: {
      color: colors.white,
    },
    input: {
      backgroundColor: colors.darkGray,
      color: colors.white,
    },
    placeholder: {
      color: colors.gray,
    },
    importance: {
      backgroundColor: colors.darkGray,
      color: colors.white,
    },
    importancePickerItem: {
      color: colors.white,
    },
    note: {
      backgroundColor: colors.darkGray,
    },
    noteText: {
      color: colors.white,
    },
    noteImportance: {
      color: colors.white,
    },
  },
  'no-preference': {
    container: {
      backgroundColor: colors.black,
    },
    headerText: {
      color: colors.white,
    },
    icon: {
      color: colors.white,
    },
    input: {
      backgroundColor: colors.darkGray,
      color: colors.white,
    },
    placeholder: {
      color: colors.gray,
    },
    importance: {
      backgroundColor: colors.darkGray,
      color: colors.white,
    },
    importancePickerItem: {
      color: colors.white,
    },
    note: {
      backgroundColor: colors.darkGray,
    },
    noteText: {
      color: colors.white,
    },
    noteImportance: {
      color: colors.white,
    },
  }
};

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop: 8,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingBottom: 8,
    },
    input: {
      flex: 1,
      marginRight: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
    },
    importance: {
      marginRight: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
    },
    importancePicker: {
      paddingHorizontal: 8,
    },
    importancePickerItem: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
    },
    addButton: {
      marginLeft: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
    },
    notesContainer: {
      paddingHorizontal: 16,
      paddingTop: 8,
    },
    note: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
    },
    noteText: {
      flex: 1,
      marginRight: 8,
    },
    noteImportance: {
      marginRight: 8,
    },
    addButtonText: {
      color: 'white',
      fontSize: 18,
    },
    deleteButton: {
      color: '#FF0000',
      fontSize: 16,
    },
    slider: {
      flex: 1,
      marginRight: 10,
    }
  });
  