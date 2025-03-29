import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialLink() {
  return (
    <div className="flex justify-center gap-6 mt-8">
      <Link
        href="https://www.instagram.com/daniellefernanda.adv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#D0BB8C] hover:text-[#F7D965C2] transition-colors text-2xl"
        aria-label="Instagram">
        <FaInstagram />
      </Link>
      <Link
        href="https://www.linkedin.com/in/seu_usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#D0BB8C] hover:text-[#F7D965C2] transition-colors text-2xl"
        aria-label="LinkedIn">
        <FaLinkedin />
      </Link>
    </div>
  );
}
