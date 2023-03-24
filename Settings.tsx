import React, {useState, useEffect} from 'react'
import {View, Switch, Text} from 'react-native'
import {lightTheme, darkTheme, styles} from './styles'
import {useTheme} from './ThemeContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamList} from './App'
import {Picker} from '@react-native-picker/picker'
import {setNavigationBarColor} from './androidNavbarColor'

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
  const [picker1Value, setPicker1Value] = useState(3)
  const [picker2Value, setPicker2Value] = useState(12)
  const [picker3Value, setPicker3Value] = useState(24)
  const [picker4Value, setPicker4Value] = useState(48)

  useEffect(() => {
    ;(async () => {
      const storedPickerValues = await AsyncStorage.getItem('pickerValues')
      if (storedPickerValues) {
        const {picker1, picker2, picker3, picker4} =
          JSON.parse(storedPickerValues)
        setPicker1Value(picker1)
        setPicker2Value(picker2)
        setPicker3Value(picker3)
        setPicker4Value(picker4)
      }
    })()
  }, [])

  const savePickerValues = async () => {
    try {
      await AsyncStorage.setItem(
        'pickerValues',
        JSON.stringify({
          picker1: picker1Value,
          picker2: picker2Value,
          picker3: picker3Value,
          picker4: picker4Value,
        }),
      )
    } catch (error) {
      console.error('Error saving picker values:', error)
    }
  }

  useEffect(() => {
    savePickerValues()
  }, [picker1Value, picker2Value, picker3Value, picker4Value])

  const toggleTheme = (value: boolean) => {
    const newColorMode = value === true ? 'dark' : 'light'
    AsyncStorage.setItem('colorMode', newColorMode)
    setNavigationBarColor(newColorMode === 'dark')
    setColorMode(newColorMode)
  }

  return (
    <View style={theme.container}>
      <View style={styles.row}>
        <Text style={[styles.settingsText, theme.settingsText]}>
          Dunkler Modus
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleTheme}
          value={colorMode === 'dark'}
        />
      </View>
      <View style={styles.settingsSeparator} />
      <Text style={[theme.separatorText, styles.settingSeparatorText]}>
        Benachrichtigungsintervalle
      </Text>

      <View style={styles.row}>
        <Text style={[styles.settingsText, theme.settingsText]}>
          Extrem Hoch
        </Text>
        <Picker
          selectedValue={picker1Value}
          style={[theme.intervallPicker, styles.intervallPicker]}
          onValueChange={(itemValue, itemIndex) => setPicker1Value(itemValue)}>
          {Array.from({length: 11}, (_, i) => i + 2).map(value => (
            <Picker.Item
              key={value}
              label={`${value}` + ' Stunden'}
              value={value}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={[styles.settingsText, theme.settingsText]}>Sehr Hoch</Text>
        <Picker
          selectedValue={picker2Value}
          style={[theme.intervallPicker, styles.intervallPicker]}
          onValueChange={(itemValue, itemIndex) => setPicker2Value(itemValue)}>
          {Array.from({length: 19}, (_, i) => (i + 6) * 2).map(value => (
            <Picker.Item
              key={value}
              label={`${value}` + ' Stunden'}
              value={value}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={[styles.settingsText, theme.settingsText]}>Hoch</Text>
        <Picker
          selectedValue={picker3Value}
          style={[theme.intervallPicker, styles.intervallPicker]}
          onValueChange={(itemValue, itemIndex) => setPicker3Value(itemValue)}>
          {Array.from({length: 29}, (_, i) => (i + 4) * 6).map(value => (
            <Picker.Item
              key={value}
              label={`${value}` + ' Stunden'}
              value={value}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={[styles.settingsText, theme.settingsText]}>Normal</Text>
        <Picker
          selectedValue={picker4Value}
          style={[theme.intervallPicker, styles.intervallPicker]}
          onValueChange={(itemValue, itemIndex) => setPicker4Value(itemValue)}>
          {Array.from({length: 29}, (_, i) => (i + 4) * 12).map(value => (
            <Picker.Item
              key={value}
              label={`${value}` + ' Stunden'}
              value={value}
            />
          ))}
        </Picker>
      </View>
    </View>
  )
}

export default Settings
