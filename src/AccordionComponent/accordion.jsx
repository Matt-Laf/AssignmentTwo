import { useRef, useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 50vw;
  margin: auto;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "5% 0" : "5px 0")};
`;

const AccordionHeader = styled.button`
  width: 100%;
  background: ${(props) => (props.isOpen ? "#7D4F50" : "#7D4F50")};
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
    background: #d1d5db;
  }
`;

const AccordionContent = styled.div`
  max-height: ${({ isOpen, height }) => (isOpen ? `${height}vh` : "0")};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out,
    padding 0.3s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  background: #ffffff;
`;

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const contentRefs = useRef([]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleItem(index)}>
            {item.title}
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </AccordionHeader>
          <AccordionContent
            ref={(el) => (contentRefs.current[index] = el)}
            isOpen={openIndex === index}
            height={contentRefs.current[index]?.scrollHeight || 0}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
