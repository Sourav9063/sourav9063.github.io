import { Route, Routes } from "react-router-dom";
import Navbar from "./global/components/navbar/Navbar";
import "./global/css/global.css";
import Cv from "./pages/cv/Cv";
import Home from "./pages/home/Home";
function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Projects />} />
    // </Routes>
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cv" element={<Cv />} />
      </Routes>
    </>
  );
}

export default App;
