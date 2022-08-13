import styled from 'styled-components/macro'
import theme from 'styles/theme'

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 20px 0;
  background-color: #fff;
  border-bottom: 1px solid #666;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: ${theme.container.viewport};
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: ${theme.container.viewport}) {
    padding: 0;
  }
`
