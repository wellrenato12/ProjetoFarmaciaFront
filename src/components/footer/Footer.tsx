import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer className="absolute bottom-0 bg-[#E31D3C] w-full ">
      <div className="flex flex-col items-center justify-center gap-2 h-20">
        <span className="flex gap-4">
          <FacebookLogo className="text-white cursor-pointer hover:scale-110 transition-all" size={32} />
          <InstagramLogo className="text-white cursor-pointer hover:scale-110 transition-all" size={32} />
          <WhatsappLogo className="text-white cursor-pointer hover:scale-110 transition-all" size={32} />
        </span>
        <span className="flex gap-4 text-white">
          <p>Copyright &copy; 2024 Drogasil</p>
          <p>Políticas de privacidade</p>
        </span>
      </div>
    </footer>
  )
}