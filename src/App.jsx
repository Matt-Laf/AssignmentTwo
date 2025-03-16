import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./GlobalStyles.css";
import PaintingOne from "./PaintingOne";
import Landing from "./landing";
import Test from "./Test";
import PaintingTwo from "./PaintingTwo";
import PaintingThree from "./PaintingThree";
import PaintingFour from "./PaintingFour";
import PaintingFive from "./PaintingFive";
import PaintingSix from "./PaintingSix";
import GalleryPage from "./Gallery";
import Index from "./Index";
//THis is a test.

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/AssignmentTwo" element={<Landing />}></Route>
          <Route path="/AssignmentTwo/Index" element={<Index />}></Route>
          <Route
            path="/AssignmentTwo/ManAtTheCrossroads"
            element={<PaintingOne />}
          ></Route>
          <Route
            path="/AssignmentTwo/ObnoxiousLiberals"
            element={<PaintingTwo />}
          ></Route>
          <Route
            path="/AssignmentTwo/TheLastSupper"
            element={<PaintingThree />}
          ></Route>
          <Route
            path="/AssignmentTwo/RedMaple"
            element={<PaintingFour />}
          ></Route>
          <Route
            path="/AssignmentTwo/OathOfTheHoratii"
            element={<PaintingFive />}
          ></Route>
          <Route
            path="/AssignmentTwo/ManAtTheCrossroads"
            element={<PaintingSix />}
          ></Route>
          <Route
            path="/AssignmentTwo/Gallery"
            element={<GalleryPage />}
          ></Route>
          <Route path="/AssignmentTwo/Test" element={<Test />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
