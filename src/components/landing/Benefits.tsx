import { Sparkles, Heart, Cpu } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Sorriso Natural e Harmônico",
    description:
      "Resultados que respeitam a individualidade do seu rosto, criando um sorriso único e natural.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description:
      "Cuidamos de você com carinho e atenção, entendendo suas necessidades e desejos.",
  },
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    description:
      "Equipamentos de última geração para diagnósticos precisos e procedimentos confortáveis.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Excelência em cada detalhe
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-500 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
