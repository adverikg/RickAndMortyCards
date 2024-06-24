import { useState } from 'react'
import { Card } from './components/Card/Card.jsx'
const URL = 'https://rickandmortyapi.com/api/character'
import './App.css'

function App() {
  const [imgCh, setImgCh] = useState('Hi!') 
  const [nameCh, setNameCh] = useState('Test')
  const [statusCh, setStatusCh] = useState('dead')

  const handleGetApi = async () => {
    const response = await fetch(URL)
    const data = await response.json()

    setNameCh(data.results[0].name)
    setImgCh(data.results[0].image)
    setStatusCh(data.results[0].status)
  }


  return (
    <>
      <div className="">
        <Card 
          nameCharacter={nameCh}
          imgCharacter={imgCh}
          quoteCharacter={statusCh}
        />
        <button onClick={handleGetApi}>Generar Personaje</button>
      </div>
    </>
  )
}

export default App