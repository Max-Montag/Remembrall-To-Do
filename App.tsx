import React, {useState, useEffect} from 'react'
import {Platform} from 'react-native'
import {
  ViewStyle,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
} from 'react-native'
import {lightTheme, darkTheme, styles} from './styles'
import {EditModeContext} from './EditModeContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import Note from './Note'

type Note = {
  id: number
  content: string
  importance: number
}

const App = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const [input, setInput] = useState('')
  const [importance, setImportance] = useState<number>(5)
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light')
  const [isEditing, setIsEditing] = useState(false)
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const theme = colorMode === 'light' ? lightTheme : darkTheme

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
    setColorMode(newColorMode)
    AsyncStorage.setItem('colorMode', newColorMode)
    setNavigationBarColor(newColorMode === 'dark')
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

  return (
    <EditModeContext.Provider value={{editingNoteId, setEditingNoteId}}>
      <TouchableWithoutFeedback onPress={() => setIsEditing(false)}>
        <View style={theme.container}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={handleSearchChange}
              placeholder='Search notes'
              placeholderTextColor={theme.placeholder.color}
            />
            <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
              {/* ICON!!! */}
              <Text style={theme.icon}>T</Text>
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={{paddingBottom: 70}}>
            {notes.map(note => (
              <Note
                key={note.id}
                note={note}
                onDelete={deleteNote}
                onUpdate={updateNote}
                colorMode={colorMode}
              />
            ))}
          </ScrollView>
          <TouchableOpacity
            onPress={addNote}
            style={[styles.addNoteButton, theme.addNoteButton as ViewStyle]}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </EditModeContext.Provider>
  )
}

export default App
