import { useTheme } from "../../context/ThemeContext";
import { CiLight, CiDark } from "react-icons/ci";

function DarkMode() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div>
      <button
        className={`
       
      `}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <CiDark size={25} /> : <CiLight size={25} />}
      </button>
    </div>
  );
}

export default DarkMode;
