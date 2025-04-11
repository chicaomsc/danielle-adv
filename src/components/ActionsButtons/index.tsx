import { FaRegCalendarAlt, FaWhatsapp } from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";

const numero = "5599982249471";
const mensagem =
  "Olá Dra. Danielle, acessei seu link da bio e gostaria de agendar uma consulta. Poderia me orientar sobre a disponibilidade?";

const buttons = [
  {
    label: "Falar pelo WhatsApp",
    icon: <FaWhatsapp />,
    url: `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
  },
  {
    label: "Agendar consulta",
    icon: <FaRegCalendarAlt />,
    url: "https://calendly.com/seu-usuario",
  },
  {
    label: "Acessar site",
    icon: <LuGlobe />,
    url: "/site",
  },
];

export default function ActionsButtons() {
  return (
    <div className="w-full max-w-[541px] mx-auto mt-7 px-4 gap-7 flex flex-wrap mb-7">
      {buttons.map((btn, index) => (
        <a
          key={index}
          href={btn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center w-full text-[#3B3223] text-[30px] font-contax px-6 py-2 bg-[#D0BB8C] hover:bg-[#CAB155] cursor-pointer rounded-lg">
          <span className="absolute mr-115  text-[44px] ">{btn.icon}</span>
          {btn.label}
        </a>
      ))}
    </div>
  );
}
