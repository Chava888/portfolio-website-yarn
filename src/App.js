import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
//Pages Components
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Portfolio" element={<Portfolio />} />
      {/* <Route path="Blog" element={<Blog />} /> */}
      <Route path="Contact" element={<Contact />} />
    </Routes>
  )

}