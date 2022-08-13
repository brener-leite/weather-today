import React from 'react'

export interface CardProps {
  onSubmit: (value: string) => void
  location?: string
}

export interface FormProps extends HTMLFormControlsCollection {
  city?: HTMLInputElement
}
