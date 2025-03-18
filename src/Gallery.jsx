import React from "react";
import Gallery from "./AccordionComponent/gallery";
import images from "./Data/ImgGallery";
import PaginationNav from "./AccordionComponent/pagination";
import styled from "styled-components";

const GalleryPage = () => {
  return (
    <Container>
      <Gallery images={images} />
      <PaginationNav></PaginationNav>
    </Container>
  );
};

const Container = styled.div``;

export default GalleryPage;
