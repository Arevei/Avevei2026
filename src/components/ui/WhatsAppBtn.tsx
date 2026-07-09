// [AreveiAI] WhatsAppbtn component for WhatsApp redirection
// Replace with your WhatsApp number in international format (no +, spaces, or dashes)
const WHATSAPP_NUMBER = "919625440855"; // Example: 91 (India) + 9876543210

// Optional: Add a pre-filled message
const MESSAGE = "Hi! I'm interested in your services.";

import { Button } from "@/components/ui/button"; // [AreveiAI] Use site Button component for consistent style

const WhatsAppbtn = () => {
  // Encode the message for use in a URL
  const encodedMessage = encodeURIComponent(MESSAGE);

  // WhatsApp click-to-chat URL
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold flex items-center gap-2 px-6 py-2 rounded-md shadow-md transition-all duration-200"
      aria-label="Chat with us on WhatsApp"
      type="button"
    >
      {/* WhatsApp SVG Icon */}
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.98L0 24l6.26-1.64A11.92 11.92 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.21-3.48-8.52zM12 22c-1.84 0-3.62-.5-5.16-1.44l-.37-.22-3.72.97.99-3.62-.24-.37A9.95 9.95 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.2-7.46c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.46.07-.7.34-.24.28-.92.9-.92 2.2 0 1.3.94 2.56 1.08 2.74.13.18 1.85 2.83 4.48 3.85.63.22 1.12.35 1.5.45.63.16 1.2.14 1.65.09.5-.07 1.65-.67 1.89-1.33.23-.65.23-1.2.16-1.33-.07-.13-.25-.2-.53-.34z"/>
      </svg>
      Chat on WhatsApp
    </Button>
  );
};

export default WhatsAppbtn; 