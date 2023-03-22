import React, {useState, useEffect} from 'react'
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ViewStyle,
} from 'react-native'
import {useNavigation, NavigationProp} from '@react-navigation/native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Note from './Note'
import {lightTheme, darkTheme, styles} from './styles'
import {useTheme} from './ThemeContext'

type Note = {
  id: number
  content: string
  importance: number
}

type NoteListNavigationProp = NavigationProp<
  {
    NoteList: undefined
    Settings: undefined
  },
  'NoteList'
>

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const [input, setInput] = useState('')
  const [importance, setImportance] = useState<number>(5)
  const {colorMode, setColorMode} = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const theme = colorMode === 'light' ? lightTheme : darkTheme
  const navigation = useNavigation<NoteListNavigationProp>()

  useEffect(() => {
    loadNotes()
  }, [])

  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('notes')
      if (storedNotes !== null) {
        setNotes(JSON.parse(storedNotes))
      }
    } catch (error) {
      console.error('Error loading notes:', error)
    }
  }

  const saveNotes = async (notesToSave: Note[]) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(notesToSave))
    } catch (error) {
      console.error('Error saving notes:', error)
    }
  }

  const addNote = () => {
    const newNote: Note = {
      id: Date.now(),
      content: 'New Note',
      importance: 4,
    }

    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes)
    saveNotes(updatedNotes)
    setInput('')
    setImportance(5)
  }

  const updateNote = (id: number, content: string) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? {...note, content} : note,
    )
    setNotes(updatedNotes)
    saveNotes(updatedNotes)
  }

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
    saveNotes(updatedNotes)
  }

  const toggleTheme = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light'
    AsyncStorage.setItem('colorMode', newColorMode)
    setNavigationBarColor(newColorMode === 'dark')
    setColorMode(newColorMode)
  }

  const setNavigationBarColor = (isDarkMode: boolean) => {
    if (Platform.OS === 'android') {
      changeNavigationBarColor(
        isDarkMode ? '#333333' : '#f1f1f1',
        !isDarkMode,
        true,
      )
    }
  }

  const handleSearchChange = (text: string) => {
    setSearchQuery(text)
  }

  const filteredNotes = notes.filter(note =>
    note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <View style={{flex: 1}}>
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchInput, theme.searchInput]}
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder='Search notes'
          placeholderTextColor={theme.placeholder.color}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={styles.themeToggle}>
          {/* ICON!!! */}
          <Text style={theme.icon}>T</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardDismissMode='none'>
        {filteredNotes.map(note => (
          <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onUpdate={updateNote}
            colorMode={colorMode}
          />
        ))}
      </ScrollView>
      <View style={styles.addNoteButtonWrapper}>
        <TouchableOpacity
          onPress={addNote}
          style={[styles.addNoteButton, theme.addNoteButton as ViewStyle]}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NoteList
