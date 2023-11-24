import { useState } from 'react'
import './App.css'
import GameStart from './Components/GameStart';
import PlayGame from './Components/PlayGame';

function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  const togggleGame = () =>{
    setGameStarted((prev) => !prev)
  }

  return (
    <>
    {isGameStarted ? <GameStart/> : <PlayGame toggle={togggleGame}/>}
    </>
  )
}

export default App
