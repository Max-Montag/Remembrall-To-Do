import React, {useEffect} from 'react'
import {Platform, View, Switch, Text, TouchableOpacity} from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import {lightTheme, darkTheme, styles} from './styles'
import {useTheme} from './ThemeContext'
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
  const {colorMode, setColorMode, toggleColorMode} = useTheme()
  const theme = colorMode === 'light' ? lightTheme : darkTheme

  const toggleTheme = (value: boolean) => {
    const newColorMode = value === true ? 'dark' : 'light'
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

  return (
    <View style={theme.container}>
      <View style={styles.row}>
        <Text style={[styles.settingsText, theme.settingsText]}>
          Dunkler Modus
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={colorMode === 'dark' ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleTheme}
          value={colorMode === 'dark'}
        />
      </View>
    </View>
  )
}

export default Settings
