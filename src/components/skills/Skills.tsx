import { useTheme } from "../../context/ThemeContext";

const skill = [
  {
    name: "HTML",
    icon: "https://img.icons8.com/fluency/48/html-5.png",
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/fluency/48/css3.png",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/fluency/48/javascript.png",
  },
  {
    name: "Typescript",
    icon: "https://img.icons8.com/fluency/48/typescript--v2.png",
  },
  {
    name: "Tailwind",
    icon: "https://img.icons8.com/fluency/48/tailwind_css.png",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-react-social-media-tanah-basah-glyph-tanah-basah.png",
  },
  {
    name: "Reduxt-Toolkit",
    icon: "https://img.icons8.com/color/48/redux.png",
  },
  {
    name: "Firebase",
    icon: "https://img.icons8.com/color/48/firebase.png",
  },
];

function Skills() {
  const { theme } = useTheme();
  return (
    <div className="pt-5  px-2 md:px-10 h-full ">
      <div className="grid md:grid-cols-2 lg:grid-cols-1  lg:place-items-end gap-2 ">
        {skill.map((skill, i) => (
          <div
            className="flex items-center justify-between lg:w-[400px] md:w-[300px] gap-4 bg-gray- shadow-sm rounded-md px-2 h-16  "
            key={i}
          >
            <p
              className={
                theme === "dark" ? "text-darkMode-text" : "text-lightMode-text"
              }
            >
              {skill.name}
            </p>
            <img
              alt="svgImg"
              src={skill.icon}
              className="hover:scale-125 duration-300"
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
