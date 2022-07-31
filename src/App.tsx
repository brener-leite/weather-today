import { useContext } from 'react'
import { GlobalContext } from 'contexts/global'

const App = () => {
  const { messages, setLanguage } = useContext(GlobalContext)

  return (
    <div>
      <h1>{messages?.app.title}</h1>
      <h2>{messages?.app.subtitle}</h2>
      <button onClick={() => setLanguage('english')}>click</button>
    </div>
  )
}

export default App
