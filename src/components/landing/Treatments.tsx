import { Sparkles, Sun, Layers, PenTool, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const treatments = [
  {
    icon: Sparkles,
    title: "Lentes de Contato Dental",
    description:
      "Lâminas ultrafinas de porcelana que transformam completamente seu sorriso com mínimo desgaste dental.",
    highlight: "Mais Popular",
  },
  {
    icon: Sun,
    title: "Clareamento a Laser",
    description:
      "Tecnologia avançada para dentes mais brancos em apenas uma sessão. Resultados imediatos e duradouros.",
  },
  {
    icon: Layers,
    title: "Facetas em Porcelana",
    description:
      "Restaurações estéticas que corrigem forma, cor e posição dos dentes para um sorriso harmônico.",
  },
  {
    icon: PenTool,
    title: "Contorno Estético",
    description:
      "Remodelagem suave dos dentes para melhorar proporções e criar simetria no sorriso.",
  },
  {
    icon: Smile,
    title: "Harmonização do Sorriso",
    description:
      "Planejamento digital completo para criar o sorriso perfeito respeitando suas características faciais.",
  },
];

const WHATSAPP_NUMBER = "5511999999999";

export function Treatments() {
  const getWhatsappUrl = (treatment: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${treatment}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-20 bg-gradient-soft" id="tratamentos">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Nossos Tratamentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Procedimentos Estéticos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Oferecemos os mais avançados tratamentos em odontologia estética,
            sempre com foco em resultados naturais e personalizados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {treatment.highlight && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  {treatment.highlight}
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                <treatment.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {treatment.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {treatment.description}
              </p>

              <Button variant="ghost" size="sm" className="group/btn" asChild>
                <a
                  href={getWhatsappUrl(treatment.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-1 group-hover/btn:text-accent transition-colors" />
                  <span className="group-hover/btn:text-accent transition-colors">
                    Saiba mais
                  </span>
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
