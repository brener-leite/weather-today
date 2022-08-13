import styled from 'styled-components'
import theme from 'styles/theme'

export const UnitSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.color.grey.dark};
`

export const Select = styled.select`
  border: none;
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 1px solid ${theme.color.grey.dark};
  color: ${theme.color.grey.dark};
  padding-right: 5px;

  option {
  }
`

export const IconWrapper = styled.div`
  margin-right: 5px;
`
