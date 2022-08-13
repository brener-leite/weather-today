import React, { useContext } from 'react'
import { useFetch } from 'hooks/useFetch'
import { GlobalContext } from 'contexts/global'
import { BingProps } from 'services/interfaces'
import config from 'services/config.json'
import * as S from 'styles/app'
import Card from 'components/Card'
import Header from 'components/Header'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

interface FormProps extends HTMLFormControlsCollection {
  city?: HTMLInputElement
}

const App = () => {
  const { language, unit, setWeather, setIsFetchingData, messages } =
    useContext(GlobalContext)
  const { data: bing } = useFetch<BingProps>(
    `${config.proxy}/${config.endpoints.bing}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
  )
  const bingImage = `${config.endpoints.bing}/${bing?.images?.[0]?.url}`

  const lang = {
    'pt-BR': 'pt_br',
    'en-US': 'en'
  }

  const units = {
    Celsius: 'metric',
    Fahrenheit: 'imperial'
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formElements: FormProps = (e.target as HTMLFormElement).elements
    setWeather(null)
    setIsFetchingData(true)

    axios
      .get(
        `${config.endpoints.weather}/data/2.5/forecast?q=${formElements.city?.value}&units=${units[unit]}&lang=${lang[language]}&APPID=772920597e4ec8f00de8d376dfb3f094`
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

  return (
    <S.Container background={bingImage}>
      <Toaster />
      <Header />
      <S.Content>
        <Card onSubmit={onSubmit} />
      </S.Content>
    </S.Container>
  )
}

export default App
