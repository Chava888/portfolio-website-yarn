import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
//Pages Components
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Error404 from './pages/Error404';
import Contact from './pages/Contact';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Portfolio" element={<Portfolio />} />
      {/* <Route path="Blog" element={<Blog />} /> */}
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )

}