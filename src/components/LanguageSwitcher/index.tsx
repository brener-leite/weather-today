import { GlobalContext } from 'contexts/global'
import { LanguageProps } from 'contexts/interfaces'
import React, { useContext } from 'react'
import { LanguageSwitchProps } from './interfaces'
import * as S from './styles'
import { TbLanguageKatakana } from 'react-icons/tb'
import theme from 'styles/theme'

const LanguageSwitcher: React.FC<LanguageSwitchProps> = ({ options }) => {
  const { setLanguage } = useContext(GlobalContext)

  return (
    <S.LanguageSwitcher>
      <S.IconWrapper>
        <TbLanguageKatakana size={25} color={theme.color.grey.dark} />
      </S.IconWrapper>
      <S.Select onChange={(e) => setLanguage(e.target.value as LanguageProps)}>
        {options.map((language) => {
          return <option value={language}>{language}</option>
        })}
      </S.Select>
    </S.LanguageSwitcher>
  )
}

export default LanguageSwitcher
