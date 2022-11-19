
import { Route, Routes } from "react-router-dom";
import Navbar from "./global/components/navbar/Navbar";
import "./global/css/global.css";
import About from "./pages/about/About";
import Cv from "./pages/cv/Cv";
import Projects from "./pages/projects/Projects.jsx";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Projects />} />
    // </Routes>
    < > <Navbar />
      <Routes>
        <Route path="/" element={<div style={{
          display: "flex", flexDirection: "column"
        }}>
          <Projects />
          <About />
        </div >} ></Route>

        < Route path="/Cv" element={<Cv />} />
      </Routes>
    </>
  );
}

export default App;
