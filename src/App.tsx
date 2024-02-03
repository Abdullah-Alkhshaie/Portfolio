import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`md:h-screen  ${
        theme === "dark"
          ? "bg-darkMode-background text-darkMode-text "
          : " bg-lightMode-background text-lightMode-text "
      }`}
    >
      <Navbar />
      <BrowserRouter>
        <div className="flex md:flex-row flex-col md:h-[90vh]">
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
