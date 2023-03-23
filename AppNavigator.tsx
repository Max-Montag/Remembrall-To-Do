import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Settings from './Settings'
import NoteList from './NoteList'
import {useTheme} from './ThemeContext'
import {lightTheme, darkTheme, styles} from './styles'

const Stack = createStackNavigator()

const AppNavigator: React.FC = () => {
  const {colorMode} = useTheme()
  const theme = colorMode === 'light' ? lightTheme : darkTheme

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='NoteList'
        component={NoteList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Settings'
        component={Settings}
        options={{
          title: 'Einstellungen',
          headerStyle: {
            backgroundColor: theme.settingsHeader.backgroundColor,
          },
          headerTintColor: theme.settingsHeader.color,
        }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator
