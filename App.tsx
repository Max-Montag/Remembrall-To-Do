import React, {useState, useEffect} from 'react'
import {TouchableWithoutFeedback, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ThemeProvider, useTheme} from './ThemeContext'
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
