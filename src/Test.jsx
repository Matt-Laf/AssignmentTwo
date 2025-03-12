import React, { useState } from "react";
import styled from "styled-components";

// Book Container: holds the book
const BookContainer = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;
  perspective: 1000px; /* Creates 3D effect */
`;

// The Book itself
const Book = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: transform 1s ease-in-out;
`;

// Page Styles: two pages, one on the left, one on the right
const Page = styled.div`
  width: 50%; /* Half width of the book */
  height: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 1s ease-in-out;

  transform: ${({ isTurned, isLeftPage }) =>
    isTurned
      ? isLeftPage
        ? "rotateY(-180deg)" /* Left page turning */
        : "rotateY(0deg)" /* Right page coming to front */
      : isLeftPage
      ? "rotateY(0deg)"
      : "rotateY(-180deg)"};
`;

// Button to trigger page turn
const Button = styled.button`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Test = () => {
  // State to track which page set is currently showing
  const [currentPageSet, setCurrentPageSet] = useState(0);

  // Array of page sets (each set has two pages)
  const pageSets = [
    [1, 2], // Pages 1 and 2
    [3, 4], // Pages 3 and 4
    [5, 6], // Pages 5 and 6
    [7, 8], // Pages 7 and 8 (you can add more as needed)
  ];
  console.log(currentPageSet);

  const handlePageTurn = () => {
    // Increment page set and loop back if we exceed the number of sets
    setCurrentPageSet((prevSet) => (prevSet + 1) % pageSets.length);
  };

  const currentPages = pageSets[currentPageSet]; // Get the current pages
  console.log(currentPages);
  return (
    <BookContainer>
      <Book>
        {/* Left page */}
        <Page isTurned={currentPageSet % 2 == 0} isLeftPage={true}>
          <p>Content of Page {currentPages[0]}</p>
        </Page>

        {/* Right page */}
        <Page isTurned={currentPageSet % 2 !== 0} isLeftPage={false}>
          <p>Content of Page {currentPages[1]}</p>
        </Page>
        {/* Left page */}
        <Page isTurned={currentPageSet % 2 == 0} isLeftPage={true}>
          <p>Content of Page {currentPages[2]}</p>
        </Page>

        {/* Right page */}
        <Page isTurned={currentPageSet % 2 !== 0} isLeftPage={false}>
          <p>Content of Page {currentPages[3]}</p>
        </Page>
      </Book>

      <Button onClick={handlePageTurn}>Next Page</Button>
    </BookContainer>
  );
};

export default Test;
