import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const Contact = () => {
  return (
    <section id="contacto" className="relative py-28 lg:py-36 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, hsl(178 41% 55% / 0.4), transparent 40%), radial-gradient(circle at 80% 70%, hsl(190 56% 39% / 0.4), transparent 40%)"
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-md text-primary-foreground/90 text-xs uppercase tracking-[0.22em] mb-6">
              Contacto
            </div>
            <h2 className="font-display text-primary-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-balance">
              Hablemos sobre el <span className="italic text-teal">próximo paso</span> de tu organización.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10 max-w-xl">
              Cuéntanos sobre tu empresa y los retos que enfrentas. Te contactaremos para coordinar
              una sesión de diagnóstico sin compromiso.
            </p>

            <div className="space-y-5">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-primary transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Email</div>
                  <div className="text-primary-foreground font-medium">{siteConfig.email}</div>
                </div>
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-primary transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60">WhatsApp</div>
                  <div className="text-primary-foreground font-medium">{siteConfig.whatsappNumber}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-teal">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Ubicación</div>
                  <div className="text-primary-foreground font-medium">{siteConfig.city}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="relative bg-card/95 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-elegant border border-primary-foreground/10">
            <h3 className="font-display text-2xl text-primary mb-6">Solicita una asesoría</h3>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const msg = `Hola PTM, soy ${data.get("nombre")} de ${data.get("empresa")}. ${data.get("mensaje")}`;
                window.open(`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`, "_blank");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Nombre</label>
                  <input required name="nombre" className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Empresa</label>
                  <input required name="empresa" className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</label>
                <input required type="email" name="email" className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">¿En qué podemos ayudarte?</label>
                <textarea required name="mensaje" rows={4} className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-none" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <MessageCircle />
                Enviar por WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Te responderemos en horario hábil. Tu información es 100% confidencial.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
