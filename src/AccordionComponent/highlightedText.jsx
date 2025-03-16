import React from "react";
import HoverPreview from "./hoverPreview";

const HighlightedText = ({ content, links }) => {
  // Sort links by longest phrase first to prevent partial replacements
  const sortedLinks = [...links].sort(
    (a, b) => b.phrase.length - a.phrase.length
  );

  const elements = [];
  let lastIndex = 0;

  sortedLinks.forEach(({ phrase, url }) => {
    const regex = new RegExp(`\\b${phrase}\\b`, "gi"); // Case-insensitive match
    let match;

    while ((match = regex.exec(content)) !== null) {
      // Push text before the match
      elements.push(content.substring(lastIndex, match.index));

      // Push the HoverPreview component as an inline element
      elements.push(<HoverPreview key={match.index} text={phrase} url={url} />);

      // Update lastIndex to continue searching
      lastIndex = match.index + phrase.length;
    }
  });

  // Add remaining text after the last match
  elements.push(content.substring(lastIndex));

  return <span style={{ display: "inline" }}>{elements}</span>;
};

export default HighlightedText;
