import {Platform} from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

export const setNavigationBarColor = (isDarkMode: boolean) => {
  if (Platform.OS === 'android') {
    changeNavigationBarColor(
      isDarkMode ? '#333333' : '#f1f1f1',
      !isDarkMode,
      true,
    )
  }
}
