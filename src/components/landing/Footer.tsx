import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground" id="contato">
            {/* Map */}
            <div className="w-full h-64 bg-primary-foreground/10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976581459!2d-46.6544!3d-23.5647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUzLjAiUyA0NsKwMzknMTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Clínica"
                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
            </div>

            {/* Footer content */}
            <div className="container py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-accent">Estética</span> Dental
                        </h3>
                        <p className="text-primary-foreground/70 leading-relaxed">
                            Transformando sorrisos e vidas através da odontologia estética de
                            excelência.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Contato</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-primary-foreground/70">
                                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>Av. Paulista, 1000 - São Paulo, SP</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary-foreground/70">
                                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>(11) 99999-9999</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary-foreground/70">
                                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>Seg-Sex: 8h às 18h</span>
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-primary-foreground/50">
                        © 2024 Clínica de Odontologia Estética. Todos os direitos reservados.
                    </p>
                    <p className="text-sm text-primary-foreground/50">
                        CRO-SP 123456 | Responsável Técnico: Dr. Nome do Dentista
                    </p>
                </div>
            </div>
        </footer>
    );
}
