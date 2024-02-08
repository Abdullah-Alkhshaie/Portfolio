import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="flex gap-3 items-center">
      <a
        href="mailto:abdullahalkhshaie@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail
          size={25}
          className="hover:scale-125 sca duration-300 cursor-ponter cursor-pointer"
        />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        // href="https://twitter.com/Dev_Abdullah1"
      >
        <FaXTwitter
          size={23}
          className="hover:scale-125 sca duration-300 cursor-ponter cursor- cursor-not-allowed "
        />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Abdullah-Alkhshaie"
      >
        <FaGithub
          size={25}
          className="hover:scale-125 sca duration-300 cursor-ponter cursor-pointer"
        />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/abdullah-alkhushei-837546266?originalSubdomain=ye"
      >
        <FaLinkedin
          size={25}
          className="hover:scale-125 sca duration-300 cursor-ponter cursor-pointer"
        />
      </a>
    </div>
  );
}

export default Contact;
