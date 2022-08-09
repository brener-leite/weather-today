import React from 'react'
import { LoadingProps } from './interfaces'
import * as S from './styles'

const Loading: React.FC<LoadingProps> = ({ size, color }) => {
  return (
    <S.Loading color={color} size={size}>
      <div />
      <div />
      <div />
    </S.Loading>
  )
}

export default Loading
