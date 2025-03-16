import { NavLink } from "react-router-dom";
import "./GlobalStyles.css";
import styled, { keyframes } from "styled-components";
import PaintingOne from "./PaintingOne";
import img from "/Black and White Minimalist Memoir Book Cover.jpg";

function Landing() {
  return (
    <Container>
      <Book src={img}></Book>
      <NavLink to="/AssignmentTwo/Index">CLICK HERE</NavLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Book = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

export default Landing;
