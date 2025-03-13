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
//THis is a test.

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/AssignmentTwo" element={<Landing />}></Route>
          <Route path="/ManAtTheCrossroads" element={<PaintingOne />}></Route>
          <Route path="/ObnoxiousLiberals" element={<PaintingTwo />}></Route>
          <Route path="/TheLastSupper" element={<PaintingThree />}></Route>
          <Route path="/RedMaple" element={<PaintingFour />}></Route>
          <Route path="/ManAtTheCrossroads" element={<PaintingFive />}></Route>
          <Route path="/ManAtTheCrossroads" element={<PaintingSix />}></Route>
          <Route path="/Test" element={<Test />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
