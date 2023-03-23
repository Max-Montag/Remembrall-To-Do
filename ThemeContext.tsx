import React, {createContext, useContext, useState, ReactNode} from 'react'

export type ThemeContextType = {
  colorMode: 'light' | 'dark'
  setColorMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
  toggleColorMode: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  colorMode: 'light',
  setColorMode: () => {},
  toggleColorMode: () => {},
})

export const useTheme = () => useContext(ThemeContext)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light')

  const toggleColorMode = () => {
    setColorMode(prevColorMode =>
      prevColorMode === 'light' ? 'dark' : 'light',
    )
  }

  return (
    <ThemeContext.Provider value={{colorMode, setColorMode, toggleColorMode}}>
      {children}
    </ThemeContext.Provider>
  )
}
