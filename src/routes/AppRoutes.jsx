import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
// import Mission from "../pages/Mission/Mission.jsx";
import Faculties from "../pages/Faculties/Faculties.jsx";
// import Timeline from "../pages/timeline/Timeline.jsx"

// import Research from "../pages/Research";
// import Events from "../pages/Events";
// import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/admissions" element={<Mission />} /> */}
        <Route path="/faculties" element={<Faculties />} />
        {/* <Route path="/timeline" element={<Timeline />} /> */}

        {/* <Route path="/research" element={<Research />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} /> */}

        {/* 404 Page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
  );
}

export default AppRoutes;