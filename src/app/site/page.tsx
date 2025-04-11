import Link from "next/link";
import { FaArrowLeft, FaTools } from "react-icons/fa";

export default function SitePage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#3B3223] px-4">
        <div className="text-center">
          <FaTools className="text-7xl text-[#D0BB8C] mb-4 mx-auto animate-bounce" />
          <h1 className="text-4xl md:text-5xl text-[#D0BB8C] font-achemost mb-4">
            Em construção
          </h1>
          <p className="text-[#F7D965] text-lg md:text-xl font-contax">
            O site completo da Dra. Danielle Fernanda está sendo preparado com
            todo carinho.
          </p>
          <p className="text-[#F7D965] text-lg md:text-xl font-contax mt-2">
            Em breve estará no ar!
          </p>

          <div className="w-full  flex justify-center mt-20">
            <Link
              href="/"
              className="flex max-w-[360px] justify-between w-full text-[#3B3223] text-[25px] font-contax px-6 py-2 bg-[#D0BB8C] hover:bg-[#CAB155] cursor-pointer rounded-lg">
              <span className=" mt-1  text-[30px] ">
                <FaArrowLeft />
              </span>
              Voltar para o link da bio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
