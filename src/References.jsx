import styled from "styled-components";
import "./GlobalStyles.css";
import Accordion from "./AccordionComponent/accordion";
import { dataPage1, imgsPage1 } from "./Data/dataPage";
import { NavLink } from "react-router-dom";
import Carousel from "./AccordionComponent/imgCarousel";
import PaginationNav from "./AccordionComponent/pagination";

function References() {
  return (
    <>
      <Container>
        <Title>References</Title>
        <ReferencesContainer>
          <p>
            <em>Aboudia - biography, shows, Articles & More | Artsy.</em> Artsy.
            (n.d.).
            <a href="Aboudia - biography, shows, Articles & More | Artsy. Artsy. (n.d.). https://www.artsy.net/artist/aboudia-1">
              https://www.artsy.net/artist/aboudia-1
            </a>
          </p>
          <p>
            Centres, K. P. U. L. (2018, April 30).{" "}
            <em>Escape the procrastination trap.</em> University 101 Study
            Strategize and Succeed.
            <a href="https://pressbooks.bccampus.ca/studystrategizesucceed/chapter/escape-the-procrastination-trap/">
              https://pressbooks.bccampus.ca/studystrategizesucceed/chapter/escape-the-procrastination-trap/
            </a>
          </p>
          <p>
            <em>David Alfaro Siqueiros - 76 artworks - painting.</em>{" "}
            www.wikiart.org. (n.d.-a).
            <a href="https://www.wikiart.org/en/david-alfaro-siqueiros/all-works#!#filterName:all-paintings-chronologically,resultType:masonry">
              https://www.wikiart.org/en/david-alfaro-siqueiros/all-works#!#filterName:all-paintings-chronologically,resultType:masonry
            </a>
          </p>
          <p>
            David, J.-L. (1784). <em>Oath of the Horatii</em> (Paris) [Oil on
            canvas <em>Oath of the Horatii</em>]. Louvre
            <a href="https://en.wikipedia.org/wiki/File:Jacques-Louis_David,_Le_Serment_des_Horaces.jpg">
              https://en.wikipedia.org/wiki/File:Jacques-Louis_David,_Le_Serment_des_Horaces.jpg
            </a>
          </p>
          <p>
            <em>Diego Rivera - 160 artworks - painting.</em> www.wikiart.org.
            (n.d.-b).
            <a href="https://www.wikiart.org/en/diego-rivera">
              https://www.wikiart.org/en/diego-rivera
            </a>
          </p>
          <p>
            <em>
              E-learning: Storyboard vs. prototype: Articulate - community.{" "}
            </em>
            Articulate. (2015, April 23).
            <a href="https://community.articulate.com/blog/articles/e-learning-storyboard-vs-prototype/1100541">
              https://community.articulate.com/blog/articles/e-learning-storyboard-vs-prototype/1100541
            </a>
          </p>
          <p>
            National Gallery of Canada. (2025). <em>Group of Seven.</em> Art
            Country Canada - A. Y. JACKSON The Red Maple GROUP OF SEVEN Giclee
            on Canavas.
            <a href="https://www.artcountrycanada.com/group-of-seven-jackson-red-maplejackson.html">
              https://www.artcountrycanada.com/group-of-seven-jackson-red-maplejackson.html
            </a>
          </p>
          <p>
            <em>Obnoxious liberals.</em> Obnoxious Liberals by Jean-Michel
            Basquiat. (n.d.).
            <a href="https://www.jean-michel-basquiat.org/obnoxious-liberals/">
              https://www.jean-michel-basquiat.org/obnoxious-liberals/
            </a>
          </p>
          <p></p>
          <p>
            Royal Academy. (n.d.).{" "}
            <em>
              Copy of Leonardo’s the last supper: Works of art: Ra collection:
              Royal Academy of Arts.
            </em>{" "}
            Copy of Leonardo’s The Last Supper | Works of Art | RA Collection |
            Royal Academy of Arts.
            <a href="https://www.royalacademy.org.uk/art-artists/work-of-art/the-last-supper ">
              https://www.royalacademy.org.uk/art-artists/work-of-art/the-last-supper
            </a>
          </p>
          <p>
            Tourist Italy. (2025).{" "}
            <em>
              How to visit the last supper in Milan in 2025 - tourist Italy.
            </em>{" "}
            HOW TO VISIT THE LAST SUPPER IN MILAN IN 2025.
            <a href="https://www.touristitaly.com/how-to-visit-the-last-supper-in-milan/ ">
              https://www.touristitaly.com/how-to-visit-the-last-supper-in-milan/
            </a>
          </p>

          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </ReferencesContainer>
        <PaginationNav></PaginationNav>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  max-width: 100vw;
  margin: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ReferencesContainer = styled.div`
  font-size: 12px;
  line-height: 2;
  p {
    text-align: left;
    margin: 0;
    padding-left: 20px;
    text-indent: -20px;
  }
`;

export default References;
