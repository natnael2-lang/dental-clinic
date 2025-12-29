import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

export default function TelegramChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const telegramUsername = "@Rina12nari"; 

  const sendMessage = () => {
    if (!message) return;
    const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setMessage("");
  };

  return (
    <>
      {/* Fixed button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat box */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-50 w-80 bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col">
          <div className="p-4 font-semibold text-gray-800 border-b border-gray-200">
            Chat on Telegram
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="p-3 flex-1 resize-none border-none focus:ring-0 outline-none text-sm"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-b-xl flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Send
          </button>
        </div>
      )}
    </>
  );
}
