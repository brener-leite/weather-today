import { GlobalContext } from 'contexts/global'
import { UnitProps } from 'contexts/interfaces'
import React, { memo, useContext } from 'react'
import { UnitSwitcherProps } from './interfaces'
import * as S from './styles'
import { TbTemperature } from 'react-icons/tb'
import theme from 'styles/theme'

const UnitSwitcher: React.FC<UnitSwitcherProps> = ({ options }) => {
  const { unit, setUnit } = useContext(GlobalContext)

  return (
    <S.UnitSwitcher>
      <S.IconWrapper>
        <TbTemperature size={25} color={theme.color.grey.dark} />
      </S.IconWrapper>
      <S.Select
        onChange={(e) => setUnit(e.target.value as UnitProps)}
        value={unit}
      >
        {options.map((unit, index) => {
          return (
            <option value={unit} key={index}>
              {unit}
            </option>
          )
        })}
      </S.Select>
    </S.UnitSwitcher>
  )
}

export default memo(UnitSwitcher)
