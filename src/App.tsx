import Navbar from "./components/navbar/Navbar";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`h-screen ${
        theme === "dark"
          ? "bg-darkMode-background text-darkMode-text "
          : " bg-lightMode-background text-lightMode-text "
      }`}
    >
      <Navbar />
    </div>
  );
}

export default App;
