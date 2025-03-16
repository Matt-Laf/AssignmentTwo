import React, { useState } from "react";
import styled from "styled-components";
import HoverPreview from "./hoverPreview";
import HighlightedText from "./highlightedText";

// Styled components
const AccordionContainer = styled.div`
  width: 90%;
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
  color: #669bbc;
  width: 100%;
  background: ${(props) => (props.isOpen ? "#780000" : "#780000")};
  border: none;
  padding: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #c1121f;
  }
`;

const AccordionContent = styled.div`
  max-height: ${({ isOpen, height }) => (isOpen ? `${height}vh` : "0")};
  border: 3px solid #003049;
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out,
    padding 0.3s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "10px" : "0")};
`;

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AccordionContainer>
      {data.map((item, index) => (
        <AccordionItem key={item.id}>
          <AccordionHeader
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            Section {item.id}
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
