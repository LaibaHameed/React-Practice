import React, { useState } from "react";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import NumberBoxes from "./NumberBoxes";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
import { Button, OutlineButton } from "../Styled/Button";

const GameStart = () => {
  const [score, setScore] = useState(0);
  const [selectNum, setSelectNum] = useState();
  const [error, seterror] = useState("");
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);


  const genRandomNum = (max, min) => Math.round(Math.random() * (max - min) + min)


  const roleDice = () => {
    if (!selectNum) {
      seterror("You have not selected any number");
      return;
    }

    const randomNum = genRandomNum(6,1);
    setCurrentDice(() => randomNum);

    // if (selectNum === randomNum) {
    //   setScore((prev) => prev + randomNum);
    //   setSelectNum(undefined);
    //   if(setScore === 10){
    //     console.log("you won");
    //   }else if(setScore == -10){
    //     console.log("you lose");
    //   }
    // }else {
    //     setScore((prev) => prev - 2);
    //     setSelectNum(undefined);
    //     if(setScore === 10){
    //       console.log("you won");
    //     }else if(setScore === -10){
    //       console.log("you lose");
    //     }
    //   }
      



    if (selectNum === randomNum) {
      setScore((prev) => prev + randomNum);
      setSelectNum(undefined);
    } else {
      setScore((prev) => prev - 2);
      setSelectNum(undefined);
    }


    // setSelectNum(undefined);
  };

  const resetScore = ()=>{
    setScore(0);
  }

  const ruleShowHandler = ()=> setShowRules((prev)=>!prev);

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberBoxes
          selectNum={selectNum}
          setSelectNum={setSelectNum}
          error={error}
          seterror={seterror}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={ruleShowHandler}> {showRules? "Hide" : "Show" } Rules </Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GameStart;

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
