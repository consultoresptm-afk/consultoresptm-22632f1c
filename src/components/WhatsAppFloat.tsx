import { MessageCircle } from "lucide-react";
import { whatsappLink, openWhatsApp } from "@/lib/site-config";

export const WhatsAppFloat = () => {
  return (
    <a
      href={whatsappLink}
      onClick={(e) => { e.preventDefault(); openWhatsApp(); }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_40%)] animate-ping opacity-30" />
      <span className="relative flex items-center gap-3 bg-[hsl(142_70%_40%)] hover:bg-[hsl(142_70%_35%)] text-white pl-4 pr-5 py-3.5 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-semibold">¿Hablamos?</span>
      </span>
    </a>
  );
};
