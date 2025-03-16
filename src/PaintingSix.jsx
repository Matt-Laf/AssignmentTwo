import styled from "styled-components";
import "./GlobalStyles.css";
import Accordion from "./AccordionComponent/accordion";
import accordionDataPage1 from "./Data/dataPage";
import { NavLink } from "react-router-dom";
import Carousel from "./AccordionComponent/imgCarousel";
import images from "./Data/ImgGallery";

function PaintingSix() {
  return (
    <>
      <Container>
        <DisplayContainer>
          <PictureContainer>
            <Carousel images={images} />
          </PictureContainer>
        </DisplayContainer>
        <TextContainer>
          <Accordion data={accordionDataPage1} />
        </TextContainer>
      </Container>
      <NavLink to={"/ObnoxiousLiberals"}>
        <Next>NEXT PAGE</Next>
      </NavLink>
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

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  max-width: 50vw;
  width: 50vw;
  border-right: solid 2px #003049;
`;

const PictureContainer = styled.div``;

const Next = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #003049;
  height: 5vh;
  width: 10vw;
  border: solid 2px #669bbc;
  cursor: point;
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

export default PaintingSix;
