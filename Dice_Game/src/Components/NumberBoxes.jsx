import React from "react";
import styled from "styled-components";

const NumberBoxes = ({ selectNum, setSelectNum, error, seterror }) => {
  const numSelectorHandler = (value) => {
    setSelectNum(value);
    seterror("");
  };
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
      {/* {numbers.map((value, i) => (
          <Box
            isSelected={value === selectNum}
            key={i}
            onClick={() => numSelectorHandler(value)}
          >
            {value}
          </Box>
        ))} */}
        {numbers.map((value, i) => {
          return <Box
            isSelected={value === selectNum}
            key={i}
            onClick={() => numSelectorHandler(value)}
          >{value}</Box>
        })}
      </div>
    </NumberSelectorContainer>
  );
};

export default NumberBoxes;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
