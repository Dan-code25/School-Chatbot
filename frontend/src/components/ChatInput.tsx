import { Send } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import type { KeyboardEvent } from "react";

interface Props {
  isTyping: boolean;
  sendMessage: (text: string) => void;
}

export default function ChatInput({ isTyping, sendMessage }: Props) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [input]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;
    sendMessage(trimmed);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-shrink-0 bg-white border-t border-gray-200 px-3 sm:px-6 lg:px-7 py-3 sm:py-4 font-lexend">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 sm:gap-3 bg-[#F2F2F2] border border-[#AAAAAA] rounded-xl px-3 py-2 transition-all duration-200">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
            placeholder="Ask anything about the Holy Nazarene Christian School here..."
            rows={1}
            className="flex-1 w-full bg-transparent border-none outline-none text-gray-800 text-sm sm:text-base resize-none placeholder-gray-400 custom-scroll max-h-36"
          />
          <button
            onClick={handleSend}
            disabled={input.trim().length === 0 || isTyping}
            className="flex items-center justify-center rounded-lg flex-shrink-0 bg-[#630F10] p-2 sm:p-2.5 transition-all duration-200 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send color="white" size={20} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
