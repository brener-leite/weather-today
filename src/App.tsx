import React, { useContext, useEffect, useState } from 'react'
import { useFetch } from 'hooks/useFetch'
import { GlobalContext } from 'contexts/global'
import { BingProps } from 'services/interfaces'
import config from 'services/config.json'
import * as S from 'styles/app'
import Card from 'components/Card'
import Header from 'components/Header'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const App = () => {
  const { language, unit, setWeather, setIsFetchingData, messages } =
    useContext(GlobalContext)
  const { data: bing } = useFetch<BingProps>(
    `${config.proxy}/${config.endpoints.bing}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
  )
  const bingImage = `${config.endpoints.bing}/${bing?.images?.[0]?.url}`
  const [userLocation, setUserLocation] = useState('')

  const lang = {
    'pt-BR': 'pt_br',
    'en-US': 'en'
  }

  const units = {
    Celsius: 'metric',
    Fahrenheit: 'imperial'
  }

  const onSubmit = (value: string) => {
    // const formElements: FormProps = (e.target as HTMLFormElement).elements
    setWeather(null)
    setIsFetchingData(true)

    axios
      .get(
        `${config.endpoints.weather}/data/2.5/forecast?q=${value}&units=${units[unit]}&lang=${lang[language]}&APPID=772920597e4ec8f00de8d376dfb3f094`
      )
      .then((response) => setWeather(response.data.list))
      .catch((error) => {
        if (error?.response?.data?.cod === '404') {
          toast.error(messages?.feedback.cityNotFound || 'Algo deu errado')
        }
      })
      .finally(() => {
        setIsFetchingData(false)
      })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios
        .get(
          `${config.endpoints.geolocation}/geocode/v1/json?q=${position.coords.latitude},${position.coords.longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=en`
        )
        .then((response) => {
          if (response.data.results[0].components.city) {
            setUserLocation(response.data.results[0].components.city)
            onSubmit(response.data.results[0].components.city)
          }
        })
    })
  }, [])

  return (
    <S.Container background={bingImage}>
      <Toaster />
      <Header />
      <S.Content>
        <Card onSubmit={onSubmit} location={userLocation} />
      </S.Content>
    </S.Container>
  )
}

export default App
