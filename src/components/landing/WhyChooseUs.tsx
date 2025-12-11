import { Check } from "lucide-react";

const differentials = [
  "Dentista especializado em Odontologia Estética",
  "Diagnóstico digital com planejamento 3D",
  "Procedimentos minimamente invasivos",
  "Resultado natural e personalizado",
  "Materiais de alta qualidade",
  "Garantia nos procedimentos",
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Nossos Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Por que escolher nossa clínica?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa clínica foi pensada para oferecer a melhor experiência em
              odontologia estética. Combinamos expertise técnica com atendimento
              humanizado para entregar resultados que superam expectativas.
            </p>

            <div className="space-y-4">
              {differentials.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-dashed border-accent/20" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-accent/30" />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-accent/10" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent mb-2">15+</div>
                  <div className="text-foreground font-medium">Anos de</div>
                  <div className="text-foreground font-medium">Experiência</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-0 right-0 bg-card rounded-xl p-4 shadow-card animate-float">
                <div className="text-2xl font-bold text-primary">+500</div>
                <div className="text-xs text-muted-foreground">Pacientes felizes</div>
              </div>

              <div className="absolute bottom-8 left-0 bg-card rounded-xl p-4 shadow-card animate-float [animation-delay:1s]">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-xs text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
