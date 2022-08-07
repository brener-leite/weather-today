import { useFetch } from 'hooks/useFetch'
import config from 'services/config.json'
import * as S from 'styles/app'
import { BingProps } from 'services/interfaces'

const App = () => {
  const { data: bing } = useFetch<BingProps>(
    `${config.proxy}/${config.endpoints.bing}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
  )
  const bingImage = `${config.endpoints.bing}/${bing?.images?.[0]?.url}`

  return (
    <S.Container background={bingImage}>
      <div></div>
    </S.Container>
  )
}

export default App
