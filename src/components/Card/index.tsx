import React, { useContext, useEffect, useState } from 'react'
import theme from 'styles/theme'
import * as S from './styles'
import { ImCompass2 } from 'react-icons/im'
import { GlobalContext } from 'contexts/global'
import Button from 'components/Button'
import {
  BsSun,
  BsCloudDrizzle,
  BsCloudSun,
  BsSnow,
  BsCloudLightningRain,
  BsCloudFog
} from 'react-icons/bs'
import { CardProps, FormProps } from './interfaces'
import { Skeleton } from '@mui/material'

const Card: React.FC<CardProps> = ({ onSubmit, location }) => {
  const { messages, unit, weather, isFetchingData } = useContext(GlobalContext)
  const icons = {
    2: <BsCloudLightningRain color="#fff" />,
    3: <BsCloudDrizzle color="#fff" />,
    5: <BsCloudDrizzle color="#fff" />,
    6: <BsSnow color="#fff" />,
    7: <BsCloudFog color="#fff" />,
    8: <BsSun color="#fff" />,
    default: <BsCloudSun color="#fff" />
  }
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1)

  const getTemperatureColor = (temperature: number) => {
    const convertedTemperature =
      unit === 'Fahrenheit' ? (temperature - 32) / 1.8 : temperature

    if (convertedTemperature < 0) return theme.color.cold.darker
    else if (convertedTemperature < 10) return theme.color.cold.dark
    else if (convertedTemperature < 15) return theme.color.cold.medium
    else if (convertedTemperature < 20) return theme.color.cold.light
    else if (convertedTemperature < 25) return theme.color.hot.light
    else if (convertedTemperature < 30) return theme.color.hot.medium
    else return theme.color.hot.dark
  }

  const units = {
    Celsius: '°C',
    Fahrenheit: '°F'
  }

  const wind = {
    Celsius: 'm/s',
    Fahrenheit: 'mi/h'
  }

  const iconToday = Math.trunc((weather?.[0]?.weather?.[0]?.id || 0) / 100)
  const iconTomorrow = Math.trunc((weather?.[1]?.weather?.[0]?.id || 0) / 100)
  const iconAfter = Math.trunc((weather?.[2]?.weather?.[0]?.id || 0) / 100)

  return (
    <S.Card>
      <S.InputWrapper>
        <div>
          <ImCompass2 size={32} color={theme.color.grey.dark} />
        </div>
        <form
          aria-label="form"
          onSubmit={(e) => {
            e.preventDefault()
            const value: string | undefined = (
              (e.target as HTMLFormElement).elements as FormProps
            ).city?.value

            !!value && onSubmit(value)
          }}
        >
          <input
            type="text"
            name="city"
            required
            placeholder={messages?.input?.placeholder}
            defaultValue={location}
          />
          {!!messages?.button.text && (
            <Button type="submit" text={messages.button.text} />
          )}
        </form>
      </S.InputWrapper>
      {isFetchingData && (
        <>
          <S.LoadingCard>
            <Skeleton variant="circular" width={100} height={100} />
            <div>
              <Skeleton width={130} height={20} />
              <Skeleton width={130} height={20} />
              <Skeleton width={130} height={20} />
            </div>
          </S.LoadingCard>
          <S.LoadingCard>
            <div>
              <Skeleton width={130} height={20} />
              <Skeleton width={130} height={20} />
            </div>
          </S.LoadingCard>
          <S.LoadingCard>
            <div>
              <Skeleton width={130} height={20} />
              <Skeleton width={130} height={20} />
            </div>
          </S.LoadingCard>
        </>
      )}
      {!!weather && (
        <S.DaysContainer>
          <S.DayWrapper
            isActive={activeDay === 1}
            onClick={() => setActiveDay(1)}
            background={getTemperatureColor(weather?.[0]?.main?.temp)}
          >
            <S.IconWrapper>
              {icons[(iconToday as keyof typeof icons) || 'default']}
            </S.IconWrapper>
            <S.InfosWrapper>
              <S.PrimaryInfo>
                <strong>{messages?.weather.days.first}</strong>
                <strong>
                  {Math.round(weather?.[0]?.main?.temp)} {units[unit]}
                </strong>
              </S.PrimaryInfo>
              <S.SecondaryInfo>
                <strong>{weather?.[0]?.weather?.[0]?.description}</strong>
              </S.SecondaryInfo>
              <S.SecondaryInfo>
                <span>
                  {messages?.weather.wind}: {weather?.[0]?.wind?.speed}{' '}
                  {wind[unit]}
                </span>
                <span>
                  {messages?.weather.humidity}: {weather?.[0]?.main?.humidity}%
                </span>
                <span>
                  {messages?.weather.pressure}: {weather?.[0]?.main?.pressure}{' '}
                  hPA
                </span>
              </S.SecondaryInfo>
            </S.InfosWrapper>
          </S.DayWrapper>
          <S.DayWrapper
            isActive={activeDay === 2}
            onClick={() => setActiveDay(2)}
            background={getTemperatureColor(weather?.[1]?.main?.temp)}
          >
            <S.IconWrapper>
              {icons[(iconTomorrow as keyof typeof icons) || 'default']}
            </S.IconWrapper>
            <S.InfosWrapper>
              <S.PrimaryInfo>
                <strong>{messages?.weather.days.second}</strong>
                <strong>
                  {Math.round(weather?.[1]?.main?.temp)} {units[unit]}
                </strong>
              </S.PrimaryInfo>
              <S.SecondaryInfo>
                <strong>{weather?.[1]?.weather?.[0]?.description}</strong>
              </S.SecondaryInfo>
              <S.SecondaryInfo>
                <span>
                  {messages?.weather.wind}: {weather?.[1]?.wind?.speed}{' '}
                  {wind[unit]}
                </span>
                <span>
                  {messages?.weather.humidity}: {weather?.[1]?.main?.humidity}%
                </span>
                <span>
                  {messages?.weather.pressure}: {weather?.[1]?.main?.pressure}{' '}
                  hPA
                </span>
              </S.SecondaryInfo>
            </S.InfosWrapper>
          </S.DayWrapper>
          <S.DayWrapper
            isActive={activeDay === 3}
            onClick={() => setActiveDay(3)}
            background={getTemperatureColor(weather?.[2]?.main?.temp)}
          >
            <S.IconWrapper>
              {icons[(iconAfter as keyof typeof icons) || 'default']}
            </S.IconWrapper>
            <S.InfosWrapper>
              <S.PrimaryInfo>
                <strong>{messages?.weather.days.third}</strong>
                <strong>
                  {Math.round(weather?.[2]?.main?.temp)} {units[unit]}
                </strong>
              </S.PrimaryInfo>
              <S.SecondaryInfo>
                <strong>{weather?.[2]?.weather?.[0]?.description}</strong>
              </S.SecondaryInfo>
              <S.SecondaryInfo>
                <span>
                  {messages?.weather.wind}: {weather?.[2]?.wind?.speed}{' '}
                  {wind[unit]}
                </span>
                <span>
                  {messages?.weather.humidity}: {weather?.[2]?.main?.humidity}%
                </span>
                <span>
                  {messages?.weather.pressure}: {weather?.[2]?.main?.pressure}{' '}
                  hPA
                </span>
              </S.SecondaryInfo>
            </S.InfosWrapper>
          </S.DayWrapper>
        </S.DaysContainer>
      )}
    </S.Card>
  )
}

export default Card
