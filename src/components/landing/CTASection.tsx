import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma avaliação estética.";

export function CTASection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-20 bg-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Seu novo sorriso{" "}
            <span className="text-gradient-gold">começa aqui</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Agende sua avaliação gratuita e descubra como podemos transformar
            seu sorriso. Nossa equipe está pronta para atender você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+5511999999999">
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Atendimento de segunda a sexta, das 8h às 18h
          </p>
        </div>
      </div>
    </section>
  );
}
