import { useTranslation } from "react-i18next";
import { FaEye } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";

import bitesImg from "../../assets/images/bites.webp";
import comfyImg from "../../assets/images/comfy.webp";
import megaImg from "../../assets/images/mega.webp";
import movieImg from "../../assets/images/movie.webp";
import colorImg from "../../assets/images/color.webp";
import stripeImg from "../../assets/images/stripe.webp";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

function Projects() {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const { t } = useTranslation();
  const { theme } = useTheme();

  const projectsData = [
    {
      img: megaImg,
      name: "MegaShop",
    },
    {
      img: movieImg,
      name: "MegaShop",
    },
    {
      img: bitesImg,
      name: "MegaShop",
    },
    {
      img: comfyImg,
      name: "MegaShop",
    },
    {
      img: colorImg,
      name: "MegaShop",
    },
    {
      img: stripeImg,
      name: "MegaShop",
    },
  ];

  return (
    <div className="py-10  px-2 md:px-10 h-full lg:h-[90vh]">
      <h1 className="text-xl md:text-3xl">{t("projectHead")}:</h1>
      <div className="mt-3 grid gird-cols-1 md:grid-cols-2 gap-2">
        {projectsData.map((product, i) => (
          <div
            onMouseOver={() => setActiveProduct(i)}
            onMouseLeave={() => setActiveProduct(null)}
            key={i}
            className="relative"
          >
            <img src={product.img} className="w-[500px]" alt={product.name} />
            <div className="absolute top-0">
              <h1
                className={`text-lg bold font-bold ${
                  theme === "dark"
                    ? "bg-darkMode-background"
                    : "bg-lightMode-background"
                } p-1  ${
                  activeProduct === i
                    ? "w-full opacity-100   duration-700"
                    : "w-[0px] opacity-0   "
                } `}
              >
                {product.name}
              </h1>
            </div>
            <div className="flex absolute z-10  gap-5 px-2">
              <a href="google.com">
                <FaEye
                  className={`cursor-pointer absolute ${
                    theme === "dark"
                      ? "text-darkMode-text"
                      : "text-darkMode-text"
                  } ${
                    activeProduct === i
                      ? "opacite-100 duration-300 bottom-3 "
                      : "opacity-0 -bottom-2  -z-0"
                  } `}
                  size={20}
                />
              </a>
              <a href="google.com">
                <TfiGithub
                  className={`cursor-pointer absolute ${
                    theme === "dark"
                      ? "text-darkMode-text"
                      : "text-darkMode-text"
                  } ${
                    activeProduct === i
                      ? "opacite-100 duration-500 bottom-3 left-14 rtl:right-14 "
                      : "opacity-0 -bottom-2  -z-0"
                  } `}
                  size={20}
                />
              </a>
            </div>
            <div className="w-full h-full absolute bg-black opacity-80 hover:opacity-20 duration-300 top-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
