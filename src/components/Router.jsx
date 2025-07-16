import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

function Router() {
  return (
    <div className>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Router;
