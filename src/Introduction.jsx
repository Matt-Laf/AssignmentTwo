import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PaginationNav from "./AccordionComponent/pagination";

function Introduction() {
  return (
    <Container>
      <IndexContainer>
        <h1>Index</h1>
        <LinksContainer>
          <StyledNavLink to="/AssignmentTwo/ManAtTheCrossroads">
            Man At The Crossroads
          </StyledNavLink>
          <StyledNavLink to="/AssignmentTwo/ObnoxiousLiberals">
            Obnoxious Liberals
          </StyledNavLink>
          <StyledNavLink to="/AssignmentTwo/TheLastSupper">
            The Last Supper
          </StyledNavLink>
          <StyledNavLink to="/AssignmentTwo/RedMaple">
            The Red Maple
          </StyledNavLink>
          <StyledNavLink to="/AssignmentTwo/OathOfTheHoratii">
            Oath of the Horatii
          </StyledNavLink>
          <StyledNavLink to="/AssignmentTwo/StarryNight">
            Starry Night
          </StyledNavLink>
          <StyledNavLink to="/AssignmentTwo/Gallery">Gallery</StyledNavLink>
          <StyledNavLink to="/AssignmentTwo/Conclusion">
            Conclusion
          </StyledNavLink>
          <StyledNavLink to="/AssignmentTwo/References">
            References
          </StyledNavLink>
        </LinksContainer>
      </IndexContainer>
      <IntroductionContainer>
        <h1>Introduction</h1>
        <p>
          Art stands as more than just an aesthetic visual experience — it is a
          reflection of the political, sociocultural, and historical forces that
          shape our world. This interactive book will explore key works of art —
          pieces that challenge, critique, and have come to define moments in
          the collective human experience. Through a deeper contextual and
          critical analysis, readers will be able to engage with and appreciate
          the many layers contained within these works beyond the surface.
        </p>
      </IntroductionContainer>

      <PaginationNav></PaginationNav>
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

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 50vw;
  padding: 5%;
  h1 {
    margin-bottom: 0%;
  }
  p {
    text-indent: 1em;
  }
`;

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  width: 50%;
  max-width: 50vw;
  border-right: solid 1px black;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledNavLink = styled(NavLink)`
  color: #003049;
  text-align: left;
  text-decoration: none;
  color: black;
  margin: 5px 0;
  &:hover {
    color: #669bbc;
  }
`;

export default Introduction;
