import styled from "styled-components";
import "./GlobalStyles.css";
import Accordion from "./AccordionComponent/accordion";
import { dataPage3, imgsPage3 } from "./Data/dataPage";
import Carousel from "./AccordionComponent/imgCarousel";
import PaginationNav from "./AccordionComponent/pagination";

function PaintingThree() {
  return (
    <>
      <Container>
        <Title>The Last Supper</Title>
        <DisplayContainer>
          <PictureContainer>
            <Carousel images={imgsPage3} />
          </PictureContainer>
        </DisplayContainer>
        <TextContainer>
          <Accordion data={dataPage3} />
        </TextContainer>
        <PaginationNav></PaginationNav>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  color: #003049;
  position: absolute;
  top: 2.5%;
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  max-width: 50vw;
  width: 50vw;
  border-right: solid 2px #003049;
`;

const PictureContainer = styled.div``;

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

export default PaintingThree;
