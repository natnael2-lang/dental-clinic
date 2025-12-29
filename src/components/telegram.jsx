import { useState } from "react";
import { Send, MessageCircle, X } from "lucide-react";

export default function TelegramChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ IMPORTANT: username WITHOUT @
  const telegramUsername = "Rina12nari";

  const openTelegram = () => {
    // Telegram only supports opening the chat
    window.open(`https://t.me/${telegramUsername}`, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-6 right-6 z-50
          bg-[#229ED9] hover:bg-[#1c8cc5]
          text-white p-4 rounded-full
          shadow-2xl transition-all
        "
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div
          className="
            fixed bottom-24 right-6 z-50
            w-80 bg-white rounded-2xl
            shadow-2xl border
            flex flex-col overflow-hidden
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#229ED9] text-white">
            <span className="font-semibold">Chat on Telegram</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message Input */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here…"
            className="
              p-3 h-24 resize-none text-sm
              outline-none border-none
            "
          />

          {/* Info */}
          <div className="px-3 text-xs text-gray-500">
            Telegram doesn’t support auto-sending messages.
            Your message will open in Telegram.
          </div>

          {/* Send Button */}
          <button
            onClick={openTelegram}
            className="
              mt-2 mx-3 mb-3
              bg-[#229ED9] hover:bg-[#1c8cc5]
              text-white py-2 rounded-full
              flex items-center justify-center gap-2
              transition
            "
          >
            <Send className="w-4 h-4" />
            Open Telegram
          </button>
        </div>
      )}
    </>
  );
}
