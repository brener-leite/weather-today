import styled from 'styled-components/macro'
import theme from './theme'

interface Props {
  background: string
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-color: ${theme.color.grey.darkest};
  background-image: ${(props) =>
    props.background && `url(${props.background})`};
  background-size: cover;
  background-position: center;
  padding: 0 20px;

  @media screen and (min-width: ${theme.container.viewport}) {
    padding: 0;
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`
