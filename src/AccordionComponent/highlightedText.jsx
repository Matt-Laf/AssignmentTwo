import React from "react";
import HoverPreview from "./hoverPreview";
import styled from "styled-components";

const HighlightedText = ({ content, links }) => {
  const HighlightedText = styled.span`
    color: #003049;
  `;
  // Sort links by longest phrase first to prevent partial replacements
  const sortedLinks = [...links].sort(
    (a, b) => b.phrase.length - a.phrase.length
  );

  let elements = [content]; // Start with the full text

  sortedLinks.forEach(({ phrase, url }) => {
    const regex = new RegExp(`\\b${phrase}\\b`, "gi");

    elements = elements.flatMap((chunk, index) => {
      if (typeof chunk !== "string") return chunk; // Preserve existing React elements

      const parts = [];
      let lastIndex = 0;
      chunk.replace(regex, (match, matchIndex) => {
        parts.push(chunk.substring(lastIndex, matchIndex)); // Text before match
        parts.push(
          <HoverPreview
            key={`${match}-${index}-${matchIndex}`}
            text={match}
            url={url}
          />
        ); // Linked text
        lastIndex = matchIndex + match.length;
      });

      parts.push(chunk.substring(lastIndex)); // Remaining text after last match
      return parts;
    });
  });

  return <HighlightedText>{elements}</HighlightedText>;
};

export default HighlightedText;
