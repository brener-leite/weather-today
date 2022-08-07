import { Dispatch, SetStateAction } from 'react'

export interface ContextProps {
  language: Language
  setLanguage: Dispatch<SetStateAction<Language>>
  messages?: MassagesProps
}

export type Language = 'pt-BR' | 'en-US'

export interface ProviderProps {
  children: JSX.Element
}

interface MassagesProps {
  app: {
    title: string
    subtitle: string
  }
}
