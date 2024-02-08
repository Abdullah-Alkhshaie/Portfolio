import { useTheme } from "../../context/ThemeContext";
import { CiLight, CiDark } from "react-icons/ci";

function DarkMode() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div>
      <button
        className={` flex items-center
      `}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <CiLight size={25} /> : <CiDark size={25} />}
      </button>
    </div>
  );
}

export default DarkMode;
