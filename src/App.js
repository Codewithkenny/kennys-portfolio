import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterComp from "./Components/FooterComp/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  );
}

export default App;
