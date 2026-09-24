import React from "react";
import { Routes, Route } from "react-router-dom";

import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";
import PageSix from "./pages/PageSix";
import PageSeven from "./pages/PageSeven";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/page2" element={<PageTwo />} />
      <Route path="/page3" element={<PageThree />} />
      <Route path="/page4" element={<PageFour />} />
      <Route path="/page5" element={<PageFive />} />
      <Route path="/page6" element={<PageSix />} />
      <Route path="/page7" element={<PageSeven />} />
    </Routes>
  );
}

export default App;