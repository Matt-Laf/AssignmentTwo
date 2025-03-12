import { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./GlobalStyles.css";
import Accordion from "./AccordionComponent/accordion";
import accordionDataPage1 from "./Data/accordionDataPage1";
import { NavLink } from "react-router-dom";
import accordionDataPage4 from "./Data/accordionDataPage4";

function PaintingFour() {
  const [size, setSize] = useState();
  const [display, setDisplay] = useState();

  const changeSize = () => {
    console.log(size);
    if (size === undefined) {
      setSize("enlarged");
      setDisplay("On");
    } else if (size === "enlarged") {
      setSize("reduced");
      setDisplay("Off");
    } else {
      setSize("enlarged");
      setDisplay("On");
    }
  };

  return (
    <>
      <Container>
        <DisplayContainer>
          <PictureContainer>
            <img
              onClick={changeSize}
              className={size}
              id="painting"
              src="https://upload.wikimedia.org/wikipedia/en/0/0a/Red_Maple_%28A._Y._Jackson%29.jpg?20031214234530"
              alt="wtf"
            ></img>
          </PictureContainer>
          <p>
            <i>Red Maple</i> Alexander Young Jackson
          </p>
        </DisplayContainer>
        <TextContainer>
          <Accordion items={accordionDataPage4} />
        </TextContainer>
      </Container>
      <NavLink to={"/TheLastSupper"}>
        <Next>NEXT PAGE</Next>
      </NavLink>
    </>
  );
}

const Next = styled.button``;
const EnlargeAnim = keyframes`
  0% {
    max-width: 50vw;
    transform: translate(0, 0);
  }

  100% {
    transform: translate(24vw, 7vh);
    max-width: 95vw;
    background-color: black;
  }
`;

const ReduceAnim = keyframes`
  0% {
    transform: translate(24vw, 7vh);
    max-width: 95vw;
  }
  100% {
    max-width: 50vw;
    transform: translate(0, 0);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 50vw;
  border-right: solid;
`;

const PictureContainer = styled.div`
  img {
    max-width: 50vw;
    transform: translate(0, 0);
  }
  .enlarged {
    animation-name: ${EnlargeAnim};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
  .reduced {
    animation-name: ${ReduceAnim};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  height: 100vh;
  max-width: 100vw;
  p {
    text-indent: 5%;
  }
  span {
    font-weight: bold;
  }
`;

export default PaintingFour;
