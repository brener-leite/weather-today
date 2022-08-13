import { Dispatch, SetStateAction } from 'react'
import { WeatherProps } from 'services/interfaces'

export interface ContextProps {
  language: LanguageProps
  setLanguage: Dispatch<SetStateAction<LanguageProps>>
  unit: UnitProps
  setUnit: Dispatch<SetStateAction<UnitProps>>
  messages?: MassagesProps
  weather: WeatherProps[] | null
  setWeather: Dispatch<SetStateAction<WeatherProps[] | null>>
  isFetchingData: boolean
  setIsFetchingData: Dispatch<SetStateAction<boolean>>
}

export type LanguageProps = 'pt-BR' | 'en-US'

export type UnitProps = 'Celsius' | 'Fahrenheit'

export interface ProviderProps {
  children: JSX.Element
}

interface MassagesProps {
  app: {
    title: string
    subtitle: string
  }
  input: {
    placeholder: string
  }
  button: {
    text: string
  }
  weather: {
    days: {
      first: string
      second: string
      third: string
    }
    wind: string
    humidity: string
    pressure: string
  }
  feedback: {
    cityNotFound: string
  }
}
