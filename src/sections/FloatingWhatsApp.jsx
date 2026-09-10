import { MessageCircle } from "lucide-react";
import { personalInfo } from "../data/data";

export function FloatingWhatsApp() {
  return (
    <a
      href={personalInfo.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-all duration-300 hover:bg-emerald-600 hover:scale-110 focus:outline-none"
    >
      <MessageCircle size={28} className="fill-current text-white" />
    </a>
  );
}