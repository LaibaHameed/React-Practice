import React from 'react'
import { Button } from '../Styled/Button'
import styled from "styled-components";

const GameOver = ({gameResult, resetScore}) => {
  return (
    <Over>
        <h1 className="result">
        {gameResult === "win"
          ? "Congratulations! You won!"
          : gameResult === "lose"
          ? "Sorry, you lost. Try again!"
          : " "}
      </h1>
      <Button onClick={resetScore}>
      {gameResult === "win"
          ? "Another Game" : "Try again"}
      </Button>
    </Over>
  )
}

export default GameOver

const Over = styled.section`
    width: 600px;
    height: 300px;
    position: absolute;
    transform: translate(-50% , -50%);
    top: 50%;
    left: 50%;
    background: White;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     h1{
        margin: 20px;
     }
`