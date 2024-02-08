import { useEffect, useState, useRef } from "react";
import LocalezationContext from "../../context/LocalezationContext";
import i18n from "../../i18n";
import { SA, US } from "country-flag-icons/react/3x2";
import { useTheme } from "../../context/ThemeContext";
import { MdLanguage } from "react-icons/md";

function Localization() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [locale, setLocale] = useState<string>(() => {
    const storedLocale = localStorage.getItem("preferredLocale");
    return storedLocale || "en";
  });
  const isMounted = useRef(true);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLocale(lng);
      localStorage.setItem("preferredLocale", lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    if (locale === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [locale]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMenu && !event.target) return;
      const target = event.target as HTMLElement;
      if (!target.closest("#language-button")) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  const handleChange = (selectedLocale: string) => {
    i18n.changeLanguage(selectedLocale);
    setLocale(selectedLocale);
    setShowMenu(false);
  };

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { theme } = useTheme();

  return (
    <div
      id="language-button"
      className={` w-fit   ${
        theme === "dark"
          ? "bg-darkMode-background text-darkMode-text "
          : " bg-lightMode-background text-lightMode-text "
      }`}
    >
      <LocalezationContext.Provider value={{ locale, setLocale }}>
        <div className=" cursor-pointer " onClick={handleMenu}>
          <span className="flex relative items-center gap-1">
            <MdLanguage size={30} />
            <div className="absolute bottom-0 z-10">
              {locale === "en" ? (
                <p
                  className={`rounded-full text-[10px] w-4 h-4 flex items-center ${
                    theme === "dark"
                      ? "bg-darkMode-background text-darkMode-text"
                      : "bg-lightMode-background text-lightMode-text"
                  } `}
                >
                  En
                </p>
              ) : (
                <p
                  className={`rounded-full text-[10px] w-4 h-4 flex items-center ${
                    theme === "dark"
                      ? "bg-darkMode-background text-darkMode-text"
                      : "bg-lightMode-background text-lightMode-text"
                  } `}
                >
                  Ar
                </p>
              )}
            </div>
          </span>
          <ul
            className={`m-0 p-2 mt-2 w-fit absolute  ${
              theme === "dark"
                ? "bg-darkMode-background text-darkMode-text "
                : " bg-lightMode-background text-lightMode-text "
            } shadow-md   ${showMenu ? "block" : "hidden"}`}
          >
            <li
              onClick={() => handleChange("en")}
              className=" flex items-center mb-2  hover:bg-[#dddddd]"
            >
              <US title="United States" className="w-10" />
            </li>
            <li
              onClick={() => handleChange("ar")}
              className="flex items-center hover:bg-[#dddddd]"
            >
              <SA title="United States" className="w-10" />
            </li>
          </ul>
        </div>
      </LocalezationContext.Provider>
    </div>
  );
}

export default Localization;
