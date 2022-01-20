import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
//Pages Components
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Error404 from './Error404';
import Contact from './Contact';



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