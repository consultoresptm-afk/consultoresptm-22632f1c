// PTM site configuration — easy to update
export const siteConfig = {
  company: "Consultores PTM Gestión y Cumplimiento SAS",
  shortName: "PTM",
  tagline: "Gestión, cumplimiento y certificación con visión estratégica",
  // 👉 Reemplaza este enlace por el brochure final (PDF, Drive, Canva, Notion...)
  brochureUrl: "https://propuesta-ptm.vercel.app/",
  whatsappNumber: "+573168203824",
  whatsappMessage: "Hola PTM, me interesa recibir asesoría personalizada.",
  email: "consultoresptm@gmail.com",
  city: "Bogotá D.C., Colombia",
};

export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
