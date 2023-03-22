import React, {useEffect} from 'react'
import {View, Switch, Text, TouchableOpacity} from 'react-native'
import {lightTheme, darkTheme, styles} from './styles'
import {ThemeContext, useTheme} from './ThemeContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamList} from './App'

type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>

type Props = {
  navigation: SettingsScreenNavigationProp
}

const Settings: React.FC<Props> = ({navigation}) => {
  const {colorMode, setColorMode} = useTheme()
  const theme = colorMode === 'light' ? lightTheme : darkTheme

  const toggleTheme = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newColorMode)
    AsyncStorage.setItem('colorMode', newColorMode)
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Einstellungen</Text>
      <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
        <Text>{colorMode === 'light' ? 'Dunkel' : 'Hell'}</Text>
      </TouchableOpacity>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={colorMode === 'dark' ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleTheme}
        value={colorMode === 'dark'}
      />
    </View>
  )
}

export default Settings
