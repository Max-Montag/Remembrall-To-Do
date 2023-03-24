import React, {useState, useEffect} from 'react'
import {TouchableWithoutFeedback, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ThemeProvider, useTheme} from './ThemeContext'
import {setNavigationBarColor} from './androidNavbarColor'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppNavigator from './AppNavigator'
import {lightTheme, darkTheme} from './styles'
import {EditModeContext} from './EditModeContext'

export type RootStackParamList = {
  TodoList: undefined
  Settings: undefined
}

const App = () => {
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const {colorMode, setColorMode} = useTheme()
  const theme = colorMode === 'light' ? lightTheme : darkTheme

  const loadTheme = async () => {
    try {
      const colorMode = await AsyncStorage.getItem('colorMode')

      if (colorMode !== null) {
        setNavigationBarColor(colorMode === 'dark' ? true : false)
        setColorMode(colorMode as 'light' | 'dark')
      }
    } catch (error) {
      console.error('Error loading todos:', error)
    }
  }

  useEffect(() => {
    loadTheme()
  }, [])

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <EditModeContext.Provider value={{editingTodoId, setEditingTodoId}}>
            <TouchableWithoutFeedback onPress={() => setIsEditing(false)}>
              <View style={theme.container}>
                <AppNavigator />
              </View>
            </TouchableWithoutFeedback>
          </EditModeContext.Provider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
