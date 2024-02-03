import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";

function About() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-end h-full px-5 ">
      <p
        className={`leading-8 text-lg w-[350px]   ${
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
