import styled from 'styled-components'
import theme from 'styles/theme'

export const Button = styled.button`
  background: #fff;
  border: 1px solid ${theme.color.grey.dark};
  padding: 10px 15px;
  border-radius: 4px;
  opacity: 1;

  span {
    font-size: ${theme.font.size.md};
    color: ${theme.color.grey.darkest};
    font-weight: ${theme.font.weight.bold};
  }

  &:disabled {
    background-color: ${theme.color.grey.light};
    border-color: ${theme.color.grey.light};

    span {
      color: #fff;
    }
  }
`
