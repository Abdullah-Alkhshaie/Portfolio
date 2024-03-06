import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Contact from "./navbar/Contact";

function Home() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [activeLink, setActiveLink] = useState<string | null>("about");

  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="flex flex-col h-full py-10  px-2 md:px-10">
      <h1 className=" text-3xl md:text-6xl lg:text-7xl  "> {t("name")} </h1>
      <p
        className={`text-lg md:text-xl my-5   ${
          theme === "dark" ? "text-lightMode-text " : "text-lightMode-textgray"
        }  `}
      >
        {t("info")}
      </p>
      <div className=" w-fit ">
        <Link to="/">
          <p
            onClick={() => handleClick("about")}
            className={`mb-2 flex items-center underline duration-300 cursor-pointer text-lg md:text-xl  text-blue-700 ${
              theme === "dark"
                ? `hover:text-darkMode-text  ${
                    activeLink === "about" ? "text-red-100" : ""
                  }`
                : `hover:text-lightMode-text  ${
                    activeLink === "about" ? "text-lightMode-text" : ""
                  }`
            }`}
          >
            {t("about")}
          </p>
        </Link>
        <Link to="/projects">
          <p
            onClick={() => handleClick("projects")}
            className={`mb-2 flex items-center underline duration-300 cursor-pointer text-lg md:text-xl  text-blue-700 ${
              theme === "dark"
                ? `hover:text-darkMode-text ${
                    activeLink === "projects" ? "text-red-100" : ""
                  }`
                : `hover:text-lightMode-text ${
                    activeLink === "projects" ? "text-lightMode-text" : ""
                  }`
            }`}
          >
            {t("projects")}
          </p>
        </Link>
        <Link to="/skills">
          <p
            onClick={() => handleClick("skills")}
            className={`mb-2 flex items-center underline duration-300 cursor-pointer text-lg md:text-xl  text-blue-700 ${
              theme === "dark"
                ? `hover:text-darkMode-text ${
                    activeLink === "skills" ? "text-red-100" : ""
                  }`
                : `hover:text-lightMode-text ${
                    activeLink === "skills" ? "text-lightMode-text" : ""
                  }`
            }`}
          >
            {t("skills")}
          </p>
        </Link>
      </div>
      <div className="mt-10 lg:mt-auto">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
