import React, {useState} from 'react'
import {TouchableWithoutFeedback, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {lightTheme, darkTheme, styles} from './styles'
import {ThemeProvider, useTheme} from './ThemeContext'
import {EditModeContext} from './EditModeContext'

export type RootStackParamList = {
  NoteList: undefined
  Settings: undefined
}

const App = () => {
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const {colorMode} = useTheme()
  const theme = colorMode === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <EditModeContext.Provider value={{editingNoteId, setEditingNoteId}}>
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
