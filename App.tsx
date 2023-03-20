import React, { useState } from 'react';
import { rgba } from 'polished';
import { useColorScheme } from 'react-native';
import { SafeAreaView, StatusBar, View, TouchableOpacity, TextInput, FlatList, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colorModeStyles } from './styles';
import PushNotification from 'react-native-push-notification';

interface Note {
  id: string;
  text: string;
  importance: number;
}

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [input, setInput] = useState('');
  const [importance, setImportance] = useState(5);
  const [showImportancePicker, setShowImportancePicker] = useState(false);
  const colorScheme = useColorScheme() || 'light';
  
  const addNote = () => {
    if (input.trim().length === 0) {
      return;
    }
    const newNote = {
      id: Date.now().toString(),
      text: input.trim(),
      importance,
    };
    setNotes([...notes, newNote]);
    setInput('');
    setImportance(5);
    sendNotification(newNote);
  };

  const deleteNote = (id: string) => {
    Alert.alert('Bestätigen', 'Möchten Sie diese Notiz wirklich löschen?', [
      { text: 'Abbrechen' },
      { text: 'Löschen', onPress: () => setNotes(notes.filter((note) => note.id !== id)) },
    ]);
  };
  

  const sendNotification = (note: Note) => {
    const intervalMap: { [key: number]: number | null } = {
      0: null,
      5: 24 * 60 * 60 * 1000,
      10: -1,
    };
    const interval = intervalMap[note.importance];
    if (interval === null) {
      return;
    }
    PushNotification.localNotificationSchedule({
      id: note.id,
      message: note.text,
      date: new Date(Date.now() + (interval === -1 ? 60 * 1000 : interval)),
      repeatType: interval === -1 ? 'minute' : 'time',
    });
  };

  const renderItem = ({ item }: { item: Note }) => {

    return (
      <View style={colorModeStyles[colorScheme].note}>
        <Text style={colorModeStyles[colorScheme].noteText}>{item.text}</Text>
        <Text style={colorModeStyles[colorScheme].noteImportance}>{item.importance}</Text>
        <TouchableOpacity onPress={() => deleteNote(item.id)}>
        <Icon name="trash-outline" size={24} color={rgba(colorModeStyles[colorScheme].icon.color, 1)} />
        </TouchableOpacity>
      </View>
    );
  };

  const colorSchemeStyles = colorModeStyles[colorScheme];

  return (
    <SafeAreaView style={colorSchemeStyles.container}>
            <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Text style={colorSchemeStyles.headerText}>Notizen</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={colorSchemeStyles.input}
          placeholder="Notiz hinzufügen"
          placeholderTextColor={rgba(colorSchemeStyles.placeholder.color, 1)}
          onChangeText={(text) => setInput(text)}
          value={input}
        />
        <TouchableOpacity onPress={() => setShowImportancePicker(!showImportancePicker)}>
          <Text style={colorSchemeStyles.importance}>{importance}</Text>
        </TouchableOpacity>
        {showImportancePicker && (
          <FlatList
            data={Array.from({ length: 11 }, (_, i) => i)}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { setImportance(item); setShowImportancePicker(false); }}>
                <Text style={colorSchemeStyles.importancePickerItem}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.importancePicker}
          />
        )}
        <TouchableOpacity onPress={addNote} style={styles.addButton}>
        <Icon name="add" size={24} color={rgba(colorSchemeStyles.icon.color, 1)} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.notesContainer}
      />
    </SafeAreaView>
  );
};

export default App;

