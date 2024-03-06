import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";

function About() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div className="flex items-center lg:justify-end lg:h-[89vh] px-2 md:px-10 py-10  ">
      <p
        className={`leading-8 text-lg md:text-xl  lg:w-[470px]   ${
          theme === "dark"
            ? "text-darkMode-textgray "
            : "text-lightMode-textgray"
        }`}
      >
        {t("aboutme")}
      </p>
    </div>
  );
}

export default About;
