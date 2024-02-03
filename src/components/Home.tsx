import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="flex flex-col justify-center h-full mb-20 md:mb-0 px-10">
      <h1 className="text-6xl "> {t("name")} </h1>
      <h3 className="text-2xl my-5">{t("title")}</h3>
      <p
        className={`text-lg   ${
          theme === "dark"
            ? "text-darkMode-textgray "
            : "text-lightMode-textgray"
        }  `}
      >
        {t("info")}
      </p>
      <div className="mt-10 w-fit ">
        <Link to="/">
          <p
            onClick={() => handleClick("about")}
            className={`mb-2 flex items-center duration-300 cursor-pointer text-lg  ${
              theme === "dark"
                ? `hover:text-darkMode-text text-darkMode-textgray ${
                    activeLink === "about" ? "text-red-100" : ""
                  }`
                : `hover:text-lightMode-text text-lightMode-textgray ${
                    activeLink === "about" ? "text-black" : ""
                  }`
            }`}
          >
            {t("about")}
          </p>
        </Link>
        <Link to="/projects">
          <p
            onClick={() => handleClick("projects")}
            className={`mb-2 flex items-center duration-300 cursor-pointer text-lg text-darkMode-textgray ${
              theme === "dark"
                ? `hover:text-darkMode-text ${
                    activeLink === "projects" ? "text-red-100" : ""
                  }`
                : `hover:text-lightMode-text ${
                    activeLink === "projects" ? "text-black" : ""
                  }`
            }`}
          >
            {t("projects")}
          </p>
        </Link>
        <Link to="/skills">
          <p
            onClick={() => handleClick("skills")}
            className={`mb-2 flex items-center duration-300 cursor-pointer text-lg text-darkMode-textgray ${
              theme === "dark"
                ? `hover:text-darkMode-text ${
                    activeLink === "skills" ? "text-red-100" : ""
                  }`
                : `hover:text-lightMode-text ${
                    activeLink === "skills" ? "text-black" : ""
                  }`
            }`}
          >
            {t("skills")}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
