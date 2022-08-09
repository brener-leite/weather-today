import { Dispatch, SetStateAction } from 'react'

export interface ContextProps {
  language: LanguageProps
  setLanguage: Dispatch<SetStateAction<LanguageProps>>
  messages?: MassagesProps
}

export type LanguageProps = 'pt-BR' | 'en-US'

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
}
