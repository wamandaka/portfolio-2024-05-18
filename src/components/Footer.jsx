import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full h-10 mb-10 py-10 space-y-5">
        <div className="flex justify-center items-center text-white gap-6">
          <a
            href="https://github.com/wamandaka"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.instagram.com/kang_piscokk/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/wamandaka/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="https://x.com/kang_piscokk" target="_blank" rel="noreferrer">
            <FaSquareXTwitter size={30} />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white text-sm font-medium">
            © 2024 Waman Daka Wardani{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
