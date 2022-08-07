import styled from 'styled-components'

interface Props {
  background: string
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-color: #000;
  background-image: ${(props) =>
    props.background && `url(${props.background})`};
  background-size: cover;
`
