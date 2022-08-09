export interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  isLoading?: boolean
  disabled?: boolean
}
