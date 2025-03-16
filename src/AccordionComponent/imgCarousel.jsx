import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 90%;
  margin: auto;
  position: relative;
`;

const Image = styled.img`
  border-top: solid 10px #c1121f;
  border-left: solid 10px #c1121f;
  border-bottom: solid 10px #669bbc;
  border-right: solid 10px #669bbc;
  border-radius: 15px 50px;
  width: 100%;
  border-radius: 8px;
  transition: opacity 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Caption = styled.p`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  z-index: 10;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const EnlargedImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const EnlargedImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 8px;
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleEnlargedImage = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <CarouselContainer>
      <PrevButton onClick={prevImage}>⬅</PrevButton>
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].caption}
        onClick={toggleEnlargedImage}
      />
      <NextButton onClick={nextImage}>➡</NextButton>
      <Caption>{images[currentIndex].caption}</Caption>

      {/* Enlarged image modal with navigation buttons */}
      <EnlargedImageContainer show={isEnlarged} onClick={toggleEnlargedImage}>
        <EnlargedImage
          src={images[currentIndex].src}
          alt={images[currentIndex].caption}
        />
      </EnlargedImageContainer>
    </CarouselContainer>
  );
};

export default Carousel;
