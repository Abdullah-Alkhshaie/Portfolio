import { useTranslation } from "react-i18next";
import { FaEye } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";

import bitesImg from "../../assets/images/bites.webp";
import comfyImg from "../../assets/images/comfy.webp";
import megaImg from "../../assets/images/mega.webp";
import movieImg from "../../assets/images/movie.webp";
// import colorImg from "../../assets/images/color.webp";
// import stripeImg from "../../assets/images/stripe.webp";
import dashboardImg from "../../assets/images/dashboard.png";
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
      github: "https://github.com/Abdullah-Alkhshaie/megashop-2",
      site: "https://megashopstore.netlify.app/",
    },
    {
      img: movieImg,
      name: "Netflix",
      github: "https://github.com/Abdullah-Alkhshaie/Netflex",
      site: "https://abdullah-alkhshaie.github.io/Netflex/",
    },
    {
      img: dashboardImg,
      name: "Dashboard",
      github: "https://github.com/Abdullah-Alkhshaie/business-db",
      site: "https://abdullah-alkhshaie.github.io/business-db/",
    },
    {
      img: bitesImg,
      name: "Bites",
      github: "https://github.com/Abdullah-Alkhshaie/Bites-4",
      site: "https://bites-4.pages.dev/",
    },
    {
      img: comfyImg,
      name: "Comfy store",
      github: "https://github.com/Abdullah-Alkhshaie/comfy",
      site: "https://abdullah-alkhshaie.github.io/Comfy/",
    },
    // {
    //   img: colorImg,
    //   name: "Color Flipper",
    //   github: "https://github.com/Abdullah-Alkhshaie/Color-Flipper",
    //   site: "https://abdullah-alkhshaie.github.io/Color-Flipper/",
    // },
    // {
    //   img: stripeImg,
    //   name: "Stripe Menu",
    //   github: "https://github.com/Abdullah-Alkhshaie/Strape-menu",
    //   site: "https://abdullah-alkhshaie.github.io/Strape-menu/",
    // },
  ];

  return (
    <div className="py-10  px-2 md:px-10 h-full lg:h-[89vh]">
      <h1 className="text-xl md:text-3xl">{t("projectHead")}:</h1>
      <div className="mt-5 grid gird-cols-1 md:grid-cols-2 gap-2">
        {projectsData.map((product, i) => (
          <div
            onMouseOver={() => setActiveProduct(i)}
            onMouseLeave={() => setActiveProduct(null)}
            key={i}
            className="relative rounded-md "
          >
            <img
              src={product.img}
              className="w-[500px] rounded-md"
              alt={product.name}
            />
            <div className="absolute top-0 rtl:left-0">
              <h1
                className={`text-md px-2 duration-700 rounded-br-lg  ${
                  theme === "dark"
                    ? "bg-darkMode-background"
                    : "bg-lightMode-background"
                } p-1  ${
                  activeProduct === i ? "opacity-100  " : "opacity-0    "
                } `}
              >
                {product.name}
              </h1>
            </div>
            <div className="flex absolute z-10  rtl:left-5 px-2">
              <a rel="noreferrer" target="_blank" href={product.site}>
                <FaEye
                  className={`cursor-pointer absolute ${
                    theme === "dark"
                      ? "text-darkMode-text"
                      : "text-darkMode-text"
                  } ${
                    activeProduct === i
                      ? "opacity-100 duration-300 bottom-3 "
                      : "opacity-0 -bottom-2  -z-0"
                  } `}
                  size={20}
                />
              </a>
              <a rel="noreferrer" target="_blank" href={product.github}>
                <TfiGithub
                  className={`cursor-pointer absolute ${
                    theme === "dark"
                      ? "text-darkMode-text"
                      : "text-darkMode-text"
                  } ${
                    activeProduct === i
                      ? "opacite-100 duration-500 bottom-3 left-10 rtl:left-5  "
                      : "opacity-0 -bottom-2  -z-0"
                  } `}
                  size={20}
                />
              </a>
            </div>
            <div className="w-full h-full rounded-md absolute bg-black opacity-50 hover:opacity-20 duration-300 top-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
