import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full  h-[203px] sm:h-[203px]">
      <div className="relative flex flex-col items-center justify-start pt-[70px]  w-full h-full">
        <Image
          src="/header.png"
          alt="Imagem do escritório"
          fill
          className="object-cover -z-10"
          priority
        />
        <Image
          src="/dani.png"
          alt="Foto da Dra. Danielle Fernanda"
          width={179}
          height={192}
          priority
        />
      </div>
    </header>
  );
}
