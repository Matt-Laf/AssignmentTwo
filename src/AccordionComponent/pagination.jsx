import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const pages = [
  "/AssignmentTwo",
  "/AssignmentTwo/Index",
  "/AssignmentTwo/ManAtTheCrossroads",
  "/AssignmentTwo/ObnoxiousLiberals",
  "/AssignmentTwo/TheLastSupper",
  "/AssignmentTwo/RedMaple",
  "/AssignmentTwo/OathOfTheHoratii",
  "/AssignmentTwo/Gallery",
  "/AssignmentTwo/Conclusion",
  "/AssignmentTwo/References",
];

const PaginationNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = pages.indexOf(location.pathname);

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <Prev onClick={handlePrev} disabled={currentIndex === 0}>
        Previous Page
      </Prev>
      <Text>{`Page ${currentIndex + 1} of ${pages.length}`}</Text>
      <Next onClick={handleNext} disabled={currentIndex === pages.length - 1}>
        Next
      </Next>
    </Container>
  );
};

const Next = styled.button`
  color: white;
  height: 5vh;
  width: 10vw;
  background: #003049;
  border: none;
`;
const Prev = styled.button`
  color: white;
  height: 5vh;
  width: 10vw;
  background: #003049;
  border: none;
`;
const Container = styled.div`
  position: absolute;
  bottom: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  left: 50%; /* Moves it to the center */
  transform: translateX(-50%); /* Corrects centering */
`;
const Text = styled.p`
  width: 200px;
  text-align: center;
`;

export default PaginationNav;
