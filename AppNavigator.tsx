import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Settings from './Settings'
import NoteList from './NoteList'

const Stack = createStackNavigator()

const AppNavigator: React.FC = () => {
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
        options={{title: 'Einstellungen'}}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator
