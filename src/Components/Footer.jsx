import { FaGithub, FaLinkedin, FaTwitter, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-press-start">
 

      <div className="bg-[#10E956] text-center py-4">
        <a href="mailto:someone@example.com" className="flex justify-center items-center space-x-2">
          <FaEnvelope size={30} />
          <span>SHOOT ME A MAIL</span>
        </a>
      </div>

 
    </footer>
  );
};

export default Footer;
