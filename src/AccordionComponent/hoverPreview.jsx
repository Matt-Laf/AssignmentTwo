import React, { useState } from "react";
import styled from "styled-components";

const HoverContainer = styled.span`
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: #003049;
  text-decoration: underline;
`;

const PreviewBox = styled.div`
  position: fixed;
  top: 25px;
  left: 0;
  width: 50vw;
  height: 50vh;
  overflow: hidden;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000000;
  display: ${(props) => (props.visible ? "block" : "none")};
  top: 50%; /* Vertically center it */
  left: 30%; /* Horizontally center it */
  transform: translate(-50%, -50%); /* Adjust to center the div properly */
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const HoverPreview = ({ text, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledLink href={url} target="_blank" rel="noopener noreferrer">
        {text}
      </StyledLink>
      <PreviewBox visible={isHovered}>
        <Iframe src={url} title="Website Preview" />
      </PreviewBox>
    </HoverContainer>
  );
};

export default HoverPreview;
