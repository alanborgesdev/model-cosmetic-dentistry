import { useState } from 'react';
import antesImage from '/src/assets/antes.png';
import depoisImage from '/src/assets/depois.png';

const cases = [
    {
        id: 1,
        treatment: 'Lentes de Contato Dental',
        beforeImage: antesImage,
        afterImage: depoisImage,
    },
    {
        id: 2,
        treatment: 'Clareamento a Laser',
        beforeImage: antesImage,
        afterImage: depoisImage,
    },
    {
        id: 3,
        treatment: 'Facetas em Porcelana',
        beforeImage: antesImage,
        afterImage: depoisImage,
    },
];

export function BeforeAfter() {
    const [activeCase, setActiveCase] = useState(0);
    const currentCase = cases[activeCase];

    return (
        <section className="py-20 bg-card" id="resultados">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-accent font-medium tracking-wider uppercase text-sm">
                        Resultados Reais
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                        Antes e Depois
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Confira algumas das transformações realizadas em nossa clínica. Cada sorriso
                        é único e personalizado.
                    </p>
                </div>

                {/* Treatment tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {cases.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveCase(index)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeCase === index
                                    ? 'bg-primary text-primary-foreground shadow-card'
                                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                            }`}
                        >
                            {item.treatment}
                        </button>
                    ))}
                </div>

                {/* Before/After comparison */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Imagem ANTES */}
                        <div className="relative group">
                            <div className="absolute -top-4 left-4 z-10 px-4 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                                Antes
                            </div>
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card bg-muted">
                                <img
                                    src={currentCase.beforeImage}
                                    alt={`Foto Antes do tratamento de ${currentCase.treatment}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Imagem DEPOIS */}
                        <div className="relative group">
                            <div className="absolute -top-4 left-4 z-10 px-4 py-1 bg-accent rounded-full text-sm font-medium text-accent-foreground">
                                Depois
                            </div>
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card bg-accent/10 border-2 border-accent/20">
                                <img
                                    src={currentCase.afterImage}
                                    alt={`Foto Depois do tratamento de ${currentCase.treatment}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-muted-foreground mt-8 text-sm">
                        * Resultados podem variar de acordo com cada paciente. As fotos são
                        meramente ilustrativas.
                    </p>
                </div>
            </div>
        </section>
    );
}
