import { createContext, useState, useMemo } from 'react'
import {
  ContextProps,
  LanguageProps,
  ProviderProps,
  UnitProps
} from './interfaces'
import PT from 'messages/pt.json'
import EN from 'messages/en.json'
import { useEffect } from 'react'
import { WeatherProps } from 'services/interfaces'

const INITIAL_VALUE: ContextProps = {
  language: 'pt-BR',
  setLanguage: () => {},
  unit: 'Celsius',
  setUnit: () => {},
  weather: null,
  setWeather: () => {},
  isFetchingData: false,
  setIsFetchingData: () => {}
}

export const GlobalContext = createContext(INITIAL_VALUE)

export const GlobalProvider: React.FC<ProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageProps>('pt-BR')
  const [unit, setUnit] = useState<UnitProps>('Celsius')
  const [weather, setWeather] = useState<WeatherProps[] | null>(null)
  const [isFetchingData, setIsFetchingData] = useState(false)

  const availableLanguages = useMemo(
    () => ({
      'pt-BR': PT,
      'en-US': EN
    }),
    []
  )
  const [messages, setMessages] = useState(availableLanguages[language])

  useEffect(() => {
    setMessages(availableLanguages[language])
  }, [language, availableLanguages])

  useEffect(() => {
    setWeather(null)
  }, [unit])

  useEffect(() => {
    setWeather(null)
  }, [unit, language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      unit,
      setUnit,
      messages,
      setMessages,
      weather,
      setWeather,
      isFetchingData,
      setIsFetchingData
    }),
    [
      language,
      setLanguage,
      unit,
      setUnit,
      messages,
      setMessages,
      weather,
      setWeather,
      isFetchingData,
      setIsFetchingData
    ]
  )

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}
