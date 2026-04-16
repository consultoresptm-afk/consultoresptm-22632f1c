import { Award, Leaf, HardHat, Lock, Zap } from "lucide-react";

const certs = [
  { code: "ISO 9001", title: "Gestión de la Calidad", desc: "Sistemas robustos para garantizar excelencia operacional y satisfacción del cliente.", icon: Award },
  { code: "ISO 14001", title: "Gestión Ambiental", desc: "Reducción de impactos ambientales y cumplimiento de la normativa vigente.", icon: Leaf },
  { code: "ISO 45001", title: "Seguridad y Salud en el Trabajo", desc: "Ambientes laborales seguros, prevención de riesgos y bienestar integral.", icon: HardHat },
  { code: "ISO 27001", title: "Seguridad de la Información", desc: "Protección de datos críticos y gestión de riesgos de ciberseguridad.", icon: Lock },
  { code: "ISO 50001", title: "Gestión de la Energía", desc: "Optimización del uso energético, reducción de costos y eficiencia sostenible.", icon: Zap },
];

export const Certifications = () => {
  return (
    <section id="certificaciones" className="relative py-20 sm:py-24 lg:py-36 bg-muted/40">
      <div className="container">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-accent font-semibold mb-3 sm:mb-4">
            Certificaciones ISO
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 text-balance">
            Estándares internacionales que <span className="italic text-accent">elevan tu marca</span>.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Acompañamos el diseño, implementación y mantenimiento de Sistemas de Gestión bajo las normas
            ISO más relevantes para tu sector. Trabajamos con un enfoque práctico y orientado a resultados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
          {certs.map((c, i) => (
            <article
              key={c.code}
              className={`group relative bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent/50 hover:shadow-elegant transition-all duration-500 overflow-hidden lg:col-span-2 ${
                i === 3 ? "lg:col-start-2" : ""
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-5 sm:mb-6 group-hover:bg-gradient-accent group-hover:text-primary-foreground group-hover:border-transparent transition-all duration-500">
                  <c.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="font-display text-accent text-xs sm:text-sm font-bold tracking-wider mb-2">
                  {c.code}
                </div>
                <h3 className="font-display text-lg sm:text-xl text-primary mb-2 sm:mb-3 leading-tight">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
