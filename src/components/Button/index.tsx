import Loading from 'components/Loading'
import React from 'react'
import { ButtonProps } from './interfaces'
import * as S from './styles'

const Button: React.FC<ButtonProps> = ({
  text,
  type = 'button',
  onClick,
  isLoading = false,
  disabled = false
}) => {
  return (
    <S.Button type={type} onClick={onClick} disabled={disabled}>
      {isLoading ? <Loading size={10} /> : <span>{text}</span>}
    </S.Button>
  )
}

export default Button
