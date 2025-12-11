import { Award, Shield, GraduationCap } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "CRO-SP 123456",
    description: "Registro profissional ativo",
  },
  {
    icon: GraduationCap,
    title: "Especialização",
    description: "Odontologia Estética - USP",
  },
  {
    icon: Shield,
    title: "Certificações",
    description: "Cursos internacionais",
  },
];

export function Credibility() {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => (
            <div
              key={credential.title}
              className="flex items-center gap-4 justify-center md:justify-start animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <credential.icon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">
                  {credential.title}
                </p>
                <p className="text-sm text-primary-foreground/70">
                  {credential.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
