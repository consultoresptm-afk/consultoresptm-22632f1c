import { Target, Eye, Sparkles } from "lucide-react";
import aboutImg from "@/assets/about-section.jpg";

const pillars = [
  { icon: Target, title: "Misión", text: "Acompañar a las organizaciones en la implementación de sistemas de gestión que aseguren cumplimiento normativo, eficiencia operativa y crecimiento sostenible." },
  { icon: Eye, title: "Visión", text: "Ser la firma consultora líder en Colombia en certificación, gestión integral y cumplimiento, reconocida por la rigurosidad técnica y la cercanía con cada cliente." },
  { icon: Sparkles, title: "Valores", text: "Integridad, excelencia técnica, confidencialidad, mejora continua y compromiso real con los resultados de cada empresa que confía en nosotros." },
];

export const About = () => {
  return (
    <section id="nosotros" className="relative py-28 lg:py-36 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-elegant aspect-[4/5]">
              <img
                src={aboutImg}
                alt="Arquitectura corporativa moderna que representa la solidez de PTM"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-card border border-border rounded-lg p-6 shadow-elegant max-w-[260px] animate-float-slow">
              <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Desde 2009</div>
              <div className="font-display text-xl text-primary leading-tight">
                Consultoría que transforma resultados.
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent/40 rounded-lg -z-10" />
          </div>

          {/* Content side */}
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-4">
              Sobre Nosotros
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-6 text-balance">
              Expertos en <span className="italic text-accent">gestión empresarial</span> y cumplimiento normativo.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Somos una firma colombiana especializada en consultoría integral, sistemas de gestión y certificaciones
              internacionales. Combinamos experiencia técnica, metodología rigurosa y un acompañamiento cercano para
              que cada empresa alcance estándares de clase mundial.
            </p>

            <div className="space-y-6">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-5 group">
                  <div className="shrink-0 w-12 h-12 rounded-md bg-gradient-accent flex items-center justify-center text-primary-foreground shadow-soft group-hover:shadow-glow transition-shadow duration-300">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-1">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
