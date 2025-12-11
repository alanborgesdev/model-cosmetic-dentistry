import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma avaliação estética.";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_70%_45%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-card text-foreground text-sm font-medium rounded-lg shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco!
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-ping opacity-30" />
    </a>
  );
}
