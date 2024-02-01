import Contact from "./Contact";
import DarkMode from "./DarkMode";
import Localization from "./Localization";

function Navbar() {
  return (
    <div className="flex item items-center px-2 md:px-10 py-5  gap-10 ju justify-end border-b">
      <Localization />
      <DarkMode />
      <Contact />
    </div>
  );
}

export default Navbar;