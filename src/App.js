import { Route, Routes } from "react-router-dom";
import Navbar from "./global/components/navbar/Navbar";
import "./global/css/global.css";
import About from "./pages/about/About";
import Cv from "./pages/cv/Cv";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects.jsx";
import { Suspense } from "react";
import Links from "./global/components/links/Links";
import GlobalProvider from "./global/provider/GlobalProvider";
function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Projects />} />
    // </Routes>
    <GlobalProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Suspense fallBack={<h1>Loading</h1>}> */}
          <Route path="/Cv" element={<Cv />} />
          {/* </Suspense> */}
        </Routes>
        <Links />
      </div>
    </GlobalProvider>
  );
}

export default App;
