import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="flex gap-3 items-center">
      <MdEmail
        size={25}
        className="hover:scale-125 sca duration-300 cursor-ponter cursor-pointer"
      />
      <FaXTwitter
        size={23}
        className="hover:scale-125 sca duration-300 cursor-ponter cursor-pointer"
      />
      <FaGithub
        size={25}
        className="hover:scale-125 sca duration-300 cursor-ponter cursor-pointer"
      />
      <FaLinkedin
        size={25}
        className="hover:scale-125 sca duration-300 cursor-ponter cursor-pointer"
      />
    </div>
  );
}

export default Contact;
