import styled from 'styled-components'

interface Props {
  size?: number
  color?: string
}

export const Loading = styled.div<Props>`
  display: flex;

  > div {
    width: ${(props) => `${props.size || 15}px`};
    height: ${(props) => `${props.size || 15}px`};
    border-radius: 50%;
    background-color: ${(props) => `${props.color || '#fff'}`};
    animation: pulse 1s infinite ease-in-out;

    &:nth-child(1) {
      animation-delay: 0.3s;
    }
    &:nth-child(2) {
      animation-delay: 0.6s;
    }
    &:nth-child(3) {
      animation-delay: 0.9s;
    }

    &:not(&:last-of-type) {
      margin-right: ${(props) => `${props.size || 15}px`};
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`
