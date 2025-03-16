import React, { useState } from "react";
import styled from "styled-components";

const HoverContainer = styled.span`
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`;

const PreviewBox = styled.div`
  position: absolute;
  top: 25px;
  left: 0;
  width: 300px;
  height: 200px;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
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
