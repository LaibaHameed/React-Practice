import React, { useState } from 'react';
import TotalScore from './TotalScore';
import styled from 'styled-components';
import NumberBoxes from './NumberBoxes';

const GameStart = () => {
    const [score, setScore] = useState(0);
    const [selectNum, setSelectNum] = useState();
    const [error, seterror] = useState("")
  return (
    <MainContainer>
    <div className="top_section">
    <TotalScore score={score}/>
    <NumberBoxes selectNum={selectNum} setSelectNum={setSelectNum} error={error} seterror={seterror} />
    </div>
</MainContainer>
  )
}

export default GameStart

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;