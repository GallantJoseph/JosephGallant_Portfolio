import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Clock from "./components/Clock";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Clock" element={<Clock />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
