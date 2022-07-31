import { Dispatch, SetStateAction } from 'react'

export interface ContextProps {
  language: Language
  setLanguage: Dispatch<SetStateAction<Language>>
}

export type Language = 'portuguese' | 'english'

export interface ProviderProps {
  children: JSX.Element
}
