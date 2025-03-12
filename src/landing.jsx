import { NavLink } from "react-router-dom";
import "./GlobalStyles.css";
import styled, { keyframes } from "styled-components";
import PaintingOne from "./PaintingOne";

function Landing() {
  return (
    <Container>
      <Book>THIS IS A BOOK</Book>
      <NavLink to="/ManAtTheCrossroads">CLICK HERE</NavLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  width: 100vw;
`;

const Book = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 30vw;
  background-color: red;
`;

export default Landing;
