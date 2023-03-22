import {createContext, useContext} from 'react'

export type ThemeContextType = {
  colorMode: 'light' | 'dark'
  setColorMode: (colorMode: 'light' | 'dark') => void
}

export const ThemeContext = createContext<ThemeContextType>({
  colorMode: 'light',
  setColorMode: () => {},
})

export const useTheme = () => useContext(ThemeContext)
