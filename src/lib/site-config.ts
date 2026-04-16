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

const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
const encodedMsg = encodeURIComponent(siteConfig.whatsappMessage);

// Default link (wa.me is the official short link)
export const whatsappLink = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;

// Smart opener: detects platform to avoid the api.whatsapp.com redirect
// (which some corporate firewalls block).
export const openWhatsApp = (customMessage?: string) => {
  const msg = customMessage ? encodeURIComponent(customMessage) : encodedMsg;
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  // Mobile → native app scheme; Desktop → WhatsApp Web (avoids api.whatsapp.com)
  const url = isMobile
    ? `https://wa.me/${cleanNumber}?text=${msg}`
    : `https://web.whatsapp.com/send?phone=${cleanNumber}&text=${msg}`;

  const win = window.open(url, "_blank", "noopener,noreferrer");

  // Fallback: if popup blocked or fails, try the universal short link
  if (!win) {
    window.location.href = `https://wa.me/${cleanNumber}?text=${msg}`;
  }
};
