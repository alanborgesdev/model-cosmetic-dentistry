import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    treatment: "Lentes de Contato",
    rating: 5,
    text: "Realizei meu sonho de ter um sorriso perfeito! A equipe é super atenciosa e o resultado ficou incrível. Recomendo de olhos fechados.",
    avatar: "MS",
  },
  {
    name: "João Santos",
    treatment: "Clareamento",
    rating: 5,
    text: "Fiz o clareamento e em apenas uma sessão meus dentes ficaram muito mais brancos. Profissionais excelentes e ambiente muito acolhedor.",
    avatar: "JS",
  },
  {
    name: "Ana Carolina",
    treatment: "Facetas",
    rating: 5,
    text: "Depois das facetas, minha autoestima mudou completamente. Não paro de sorrir! O Dr. é um verdadeiro artista.",
    avatar: "AC",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            O que nossos pacientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-background rounded-2xl p-8 shadow-soft animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-background rounded-full shadow-soft border border-border">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-medium">5.0</span>
            <span className="text-muted-foreground">no Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
