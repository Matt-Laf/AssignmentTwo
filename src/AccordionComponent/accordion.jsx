import React, { useState } from "react";
import styled from "styled-components";
import HoverPreview from "./hoverPreview";
import HighlightedText from "./highlightedText";

// Styled components
const AccordionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 80%;
  max-height: 80%;
  max-width: 50vw;
  margin: auto;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #c1121f;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "5% 0" : "5px 0")};
`;

const AccordionHeader = styled.div`
  color: #003049;
  width: 100%;
  background: ${(props) => (props.isOpen ? "#669bbc" : "#669bbc")};
  border: none;
  padding: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #c1121f;
  }
`;

const AccordionContent = styled.div`
  max-height: ${({ isOpen, height }) => (isOpen ? `30vh` : "0")};
  border-left: 2px solid #669bbc;
  border-right: 2px solid #669bbc;
  border-bottom: 2px solid #669bbc;
  overflow-y: auto;
  line-height: 150%;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out,
    padding 0.3s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  &::-webkit-scrollbar {
    width: 8px; /* Width of vertical scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #fdf0d5; /* Track background */
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #669bbc; /* Color of the scroll thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #003049; /* Darker on hover */
  }
`;

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <AccordionContainer>
      {data.map((item, index) => (
        <AccordionItem key={item.id}>
          <AccordionHeader
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              setOpenIndex(openIndex === index ? null : index)
            }
            tabIndex={0}
          >
            {item.title}
          </AccordionHeader>
          <AccordionContent isOpen={openIndex === index}>
            <HighlightedText content={item.content} links={item.links} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
