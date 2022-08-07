import { createContext, useState, useMemo } from 'react'
import { ContextProps, Language, ProviderProps } from './interfaces'
import PT from 'messages/pt.json'
import EN from 'messages/en.json'
import { useEffect } from 'react'

const INITIAL_VALUE: ContextProps = {
  language: 'en-US',
  setLanguage: () => {}
}

export const GlobalContext = createContext(INITIAL_VALUE)

export const GlobalProvider: React.FC<ProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR')

  const availableLanguages = {
    'pt-BR': PT,
    'en-US': EN
  }
  const [messages, setMessages] = useState(availableLanguages[language])

  useEffect(() => {
    setMessages(availableLanguages[language])
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      messages
    }),
    [language, setLanguage, messages, availableLanguages]
  )

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}
