import React from 'react';
import {Button} from '../Styled/Button.js'
import styled from 'styled-components';

const PlayGame = ({toggle}) => {
    
  return (
   <Container>
    <div>
        <img src='dices.png'/>
    </div>
    <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Game</Button>
    </div>
   </Container>
  )
}

export default PlayGame

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
