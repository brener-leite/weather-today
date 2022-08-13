import { GlobalContext } from 'contexts/global'
import { LanguageProps } from 'contexts/interfaces'
import React, { memo, useContext } from 'react'
import { LanguageSwitcherProps } from './interfaces'
import * as S from './styles'
import { TbLanguageKatakana } from 'react-icons/tb'
import theme from 'styles/theme'

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ options }) => {
  const { language, setLanguage } = useContext(GlobalContext)

  return (
    <S.LanguageSwitcher>
      <S.IconWrapper>
        <TbLanguageKatakana size={25} color={theme.color.grey.dark} />
      </S.IconWrapper>
      <S.Select
        onChange={(e) => setLanguage(e.target.value as LanguageProps)}
        value={language}
      >
        {options.map((language, index) => {
          return (
            <option value={language} key={index}>
              {language}
            </option>
          )
        })}
      </S.Select>
    </S.LanguageSwitcher>
  )
}

export default memo(LanguageSwitcher)
