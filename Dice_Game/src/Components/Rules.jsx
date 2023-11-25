import React from 'react'
import { Button } from '../Styled/Button'
import styled from 'styled-components';

const Rules = ({ruleShowHandler}) => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <ol className="text">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted </li>
        <li>if you get 10 points you win</li>
        <li>if you get -10 points you will lose </li>
      </ol>
      <Button onClick={ruleShowHandler} className='btn'>
            Hide Rules
        </Button>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
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
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
  .btn {
    margin-top: 40px
  }
`;