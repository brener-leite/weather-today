import LanguageSwitcher from 'components/LanguageSwitcher'
import UnitSwitcher from 'components/UnitSwitcher'
import { LanguageProps, UnitProps } from 'contexts/interfaces'
import React from 'react'
import * as S from './styles'

const Header: React.FC = () => {
  const languages: LanguageProps[] = ['en-US', 'pt-BR']
  const units: UnitProps[] = ['Celsius', 'Fahrenheit']

  return (
    <S.Header>
      <S.Wrapper>
        <div style={{ marginRight: 20 }}>
          <LanguageSwitcher options={languages} />
        </div>
        <div>
          <UnitSwitcher options={units} />
        </div>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
