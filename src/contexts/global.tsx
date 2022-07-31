import { createContext, useState, useMemo } from 'react'
import { ContextProps, Language, ProviderProps } from './interfaces'

const INITIAL_VALUE: ContextProps = {
  language: 'english',
  setLanguage: () => {}
}

export const GlobalContext = createContext(INITIAL_VALUE)

export const GlobalProvider: React.FC<ProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('english')

  const value = useMemo(
    () => ({
      language,
      setLanguage
    }),
    [language, setLanguage]
  )

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}
