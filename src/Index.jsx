import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Index() {
  return (
    <Container>
      <NavLink to="/AssignmentTwo/ManAtTheCrossroads">
        Man At The Crossroads
      </NavLink>
      <NavLink to="/AssignmentTwo/ObnoxiousLiberals">
        Obnoxious Liberals
      </NavLink>
      <NavLink to="/AssignmentTwo/TheLastSupper">The Last Supper</NavLink>
      <NavLink to="/AssignmentTwo/RedMaple">The Red Maple</NavLink>
      <NavLink to="/AssignmentTwo/ManAtTheCrossroads">CLICK HERE</NavLink>
      <NavLink to="/AssignmentTwo/ObnoxiousLiberals">CLICK HERE</NavLink>
      <NavLink to="/AssignmentTwo/ManAtTheCrossroads">CLICK HERE</NavLink>
      <NavLink to="/AssignmentTwo/Gallery">Gallery</NavLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
export default Index;
