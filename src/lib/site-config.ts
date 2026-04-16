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

// Universal short link — works for SEO and as visible href
export const whatsappLink = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;

/**
 * Robust WhatsApp opener that tries multiple strategies:
 * 1. On mobile → wa.me (opens the native app reliably)
 * 2. On desktop → tries the whatsapp:// protocol first (opens Desktop app or Web
 *    if installed), then falls back to wa.me which the user's browser will handle.
 *
 * This avoids relying on web.whatsapp.com or api.whatsapp.com directly,
 * since those can be blocked by some corporate firewalls.
 */
export const openWhatsApp = (customMessage?: string) => {
  const msg = customMessage ? encodeURIComponent(customMessage) : encodedMsg;
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  if (isMobile) {
    // Mobile: wa.me opens the native app instantly
    window.open(`https://wa.me/${cleanNumber}?text=${msg}`, "_blank", "noopener,noreferrer");
    return;
  }

  // Desktop: try the protocol handler first (works if WhatsApp Desktop is installed)
  const protocolUrl = `whatsapp://send?phone=${cleanNumber}&text=${msg}`;
  const fallbackUrl = `https://wa.me/${cleanNumber}?text=${msg}`;

  // Open fallback in a new tab — wa.me's landing page lets the user click "Continue to chat"
  // which opens the app if installed, or web.whatsapp.com otherwise
  const win = window.open(fallbackUrl, "_blank", "noopener,noreferrer");

  // Also try the protocol handler — if WhatsApp Desktop is installed it'll be focused
  try {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = protocolUrl;
    document.body.appendChild(iframe);
    setTimeout(() => iframe.remove(), 1000);
  } catch (_) {
    // ignore — fallback tab is already open
  }

  if (!win) {
    // Popup blocked → navigate the current tab
    window.location.href = fallbackUrl;
  }
};
