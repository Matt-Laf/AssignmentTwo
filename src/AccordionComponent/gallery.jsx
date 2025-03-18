import React, { useState } from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10%, 17%));
  gap: 1%;
  padding: 20px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 80vh;
  border-radius: 8px;
`;

const Caption = styled.p`
  color: white;
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
`;

const Button = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  z-index: 1000;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const LightboxContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Gallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <GalleryContainer>
        {images.map(({ src, caption }, index) => (
          <Thumbnail
            key={index}
            src={src}
            alt={caption}
            onClick={() => openImage(index)}
          />
        ))}
      </GalleryContainer>

      {selectedIndex !== null && (
        <Lightbox>
          <CloseButton onClick={closeImage}>✖</CloseButton>
          <LightboxContent>
            <Button onClick={prevImage}>⬅ </Button>
            <LightboxImage
              src={images[selectedIndex].src}
              alt={images[selectedIndex].caption}
            />

            <Button onClick={nextImage}> ➡</Button>
          </LightboxContent>
          <Caption>{images[selectedIndex].caption}</Caption>
        </Lightbox>
      )}
    </>
  );
};

export default Gallery;
