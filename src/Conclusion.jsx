import styled from "styled-components";
import "./GlobalStyles.css";
import PaginationNav from "./AccordionComponent/pagination";
import savina from "/Savina.jpg";
import sophia from "/Sophia.jpg";
import talha from "/Talha.jpg";
import matt from "/ME.jpg";

function Conclusion() {
  return (
    <>
      <Container>
        <DisplayContainer>
          <Title>Conclusion</Title>
          <p>
            By examining these works of art, we hope you have come to realize
            how a variety of visuals and aesthetic choices are born from and
            interact with our world. Through interactive exploration, this book
            has encouraged a deeper engagement with these artworks — positioning
            them as a vehicle from which to examine history and society. The
            connections we make between images, ideas, and the world at large,
            will inevitably reflect in our interpretations of art.
          </p>
        </DisplayContainer>
        <TextContainer>
          <Title>About the Authors</Title>
          <AboutContainer>
            <Author src={sophia}></Author>
            <p>
              My name is Sophia Slavchenko. I am 21 years old and Ukranian and
              French Canadian. I am enrolled in the Concurrent Education program
              at Ontario Tech University. My favourite art medium is cubism.
            </p>
          </AboutContainer>
          <AboutContainer>
            <p>
              My name is Savina Kallianiotis. I am 18 years old and am Greek and
              Portuguese. I'm currently enrolled as a first year student in the
              Bachelors of Education program at Ontario Tech University. My
              favourite art medium is impressionism.
            </p>
            <Author src={savina}></Author>
          </AboutContainer>
          <AboutContainer>
            <Author src={talha}></Author>
            <p>
              My name is Talha Imran. I am 24 years old and I am Pakistani. I am
              enrolled as a second year student in the Educational studies
              program. My favourite art style is surrealism.
            </p>
          </AboutContainer>
          <AboutContainer>
            <p>
              Hi I'm Matt! I'm a 30 year old from Quebec. Currently enrolled in
              the Educational studies program at Ontario Tech. My favourite art
              style is Realism.
            </p>
            <Author src={matt}></Author>
          </AboutContainer>
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
  max-height: 100vh;
`;

const Title = styled.h1`
  border-bottom: solid 1px black;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 20vh;
  p {
    font-size: 18px;
  }
`;

const Author = styled.img`
  max-height: 15vh;
  max-width: 15vw;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 50%;
  object-fit: cover;
  border-top: solid 3px #c1121f;
  border-left: solid 10px #c1121f;
  border-bottom: solid 3px #669bbc;
  border-right: solid 10px #669bbc;
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50vw;
  width: 50vw;
  border-right: solid 2px #003049;
  padding: 5%;
  padding-top: 0;
  p {
    text-indent: 5%;
  }
`;

const TextContainer = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  height: 50vh;
  max-width: 100vw;
  width: 50vw;
  p {
    text-indent: 1.5em;
  }
  span {
    font-weight: bold;
  }
`;

export default Conclusion;
