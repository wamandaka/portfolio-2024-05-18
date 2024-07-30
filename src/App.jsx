import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoreProject from "./Pages/MoreProject";
import Home from "./Pages/Home";
import Notfound from "./Pages/NotFound";
import UnderDevelopement from "./Pages/UnderDevelopement";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<UnderDevelopement />} /> */}
          <Route path="/projects" element={<MoreProject />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
