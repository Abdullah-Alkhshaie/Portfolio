import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import { useTheme } from "./context/ThemeContext";

import bgImg from "./assets/images/bgimg.jpg";

function App() {
  const { theme } = useTheme();

  const backgroundImageStyle = {
    backgroundImage: `${bgImg}`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      className={`h-full lg:h-screen 
       ${
         theme === "dark"
           ? "bg-darkMode-background text-darkMode-text "
           : " bg-lightMode-background text-lightMode-text "
       }
      `}
      style={backgroundImageStyle}
    >
      <Navbar />
      <BrowserRouter>
        <div className="flex lg:flex-row flex-col lg:h-fit">
          <div className="flex-1 ">
            <Home />
          </div>
          <div className="flex-1 ">
            <Routes>
              <Route path="" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
