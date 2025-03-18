import "./GlobalStyles.css";
import styled from "styled-components";

import img from "/Black and White Minimalist Memoir Book Cover.jpg";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <Container>
      <Connector to="/AssignmentTwo/Introduction">
        <Book src={img}></Book>
      </Connector>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 99.5vh;
  width: 100vw;
  max-height: 100vh;
`;

const Book = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  border: solid 2px rgba(0, 0, 0, 0.1);
`;

const Connector = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 99.5vh;
  width: 100vw;
  max-height: 100vh;
`;

export default Landing;
