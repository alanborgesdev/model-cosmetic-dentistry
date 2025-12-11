import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-smile.jpg";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma avaliação estética.";

export function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sorriso perfeito - Odontologia Estética"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Especialistas em Estética Dental
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-in [animation-delay:200ms] opacity-0">
            Transforme seu sorriso,{" "}
            <span className="text-gradient-gold">transforme sua vida</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl animate-fade-in [animation-delay:400ms] opacity-0">
            Descubra o poder de um sorriso perfeito com tratamentos estéticos de
            excelência. Tecnologia avançada e atendimento humanizado para
            resultados naturais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:600ms] opacity-0">
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Agendar Avaliação
              </a>
            </Button>
            <Button variant="outline-gold" size="xl" asChild>
              <a href="#tratamentos">Conhecer Tratamentos</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 pt-4 animate-fade-in [animation-delay:800ms] opacity-0">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <span className="text-2xl font-bold text-accent">+500</span>
              <span className="text-sm">Sorrisos<br />transformados</span>
            </div>
            <div className="w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <span className="text-2xl font-bold text-accent">15</span>
              <span className="text-sm">Anos de<br />experiência</span>
            </div>
            <div className="w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <span className="text-2xl font-bold text-accent">5★</span>
              <span className="text-sm">Avaliação<br />Google</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
