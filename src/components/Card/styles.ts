import styled from 'styled-components/macro'
import theme from 'styles/theme'

export const Card = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: #fff;
  opacity: 0.9;
  border-radius: 5px;
  overflow: hidden;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  border-radius: 4px;

  input {
    font-size: ${theme.font.size.lg};
    color: ${theme.color.grey.dark};
    font-weight: ${theme.font.weight.semiBold};
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${theme.color.grey.dark};
    margin-right: 10px;
    flex: 1;

    &::placeholder {
      color: ${theme.color.grey.light};
    }
  }

  svg {
    width: 20px;
  }

  > div {
    margin-right: 10px;
  }

  form {
    display: flex;
    flex: 1;
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 10px;

    svg {
      width: 32px;
    }

    > div {
      margin-right: 20px;
    }

    input {
      font-size: ${theme.font.size.h3};
      font-weight: ${theme.font.weight.medium};
    }
  }
`

export const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
`

interface WeatherProps {
  background?: string
  isActive: boolean
}

export const IconWrapper = styled.div`
  margin-right: 20px;
  transition: 0.3s all;

  svg {
    width: 70px;
    height: auto;
  }

  @media screen and (min-width: 1024px) {
    svg {
      width: 200px;
    }
  }
`

export const PrimaryInfo = styled.div``

export const SecondaryInfo = styled.div`
  transition: 0.3s all;
`

export const InfosWrapper = styled.div`
  > div {
    display: flex;
    flex-direction: column;
  }

  strong,
  span {
    color: #fff;
    font-weight: ${theme.font.weight.semiBold};
  }

  strong {
    font-size: ${theme.font.size.lg};
    line-height: ${theme.font.size.h5};

    &:first-letter {
      text-transform: uppercase;
    }
  }

  span {
    font-size: ${theme.font.size.md};
    line-height: ${theme.font.size.xl};
  }

  @media screen and (min-width: 1024px) {
    strong {
      font-size: ${theme.font.size.h3};
      line-height: ${theme.font.size.h2};
    }

    span {
      font-size: ${theme.font.size.h5};
      line-height: ${theme.font.size.h4};
    }
  }
`

export const DayWrapper = styled.div<WeatherProps>`
  padding: 10px 40px;
  background-color: ${(props) => props.background || theme.color.grey.medium};
  transition: 0.3s all;
  cursor: pointer;
  border-bottom: 1px solid #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 61px;

  ${IconWrapper}, ${SecondaryInfo} {
    display: none;
  }

  ${InfosWrapper} {
    max-width: 100%;
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 60px;
    height: 105px;
  }

  ${(props) =>
    props.isActive &&
    `
    height: 165px;

    ${IconWrapper}, ${SecondaryInfo} {
      display: flex;
      animation: open 0.5s;
    }

    ${InfosWrapper} {
      > div {
        margin-bottom: 10px;
      }
    }

    @media screen and (min-width: 1024px) {
      height: 295px;

      ${InfosWrapper} {
        max-width: 183px;
      }
    }
  `}

  @keyframes open {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes close {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const LoadingCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.7px solid ${theme.color.grey.medium};
  padding: 10px 40px;

  @media screen and (min-width: 1024px) {
    padding: 20px 80px;
  }
`
