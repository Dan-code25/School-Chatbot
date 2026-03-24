import botImg from "../assets/chatbot.svg";
import { useEffect, useRef, useState } from "react";
import type { Message } from "../types/message";

interface Props {
  messages: Message[];
  isTyping: boolean;
}

export default function MessageBubble({ messages, isTyping }: Props) {
  const [visibleIds, setVisibleIds] = useState<Set<number>>(new Set());
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messages.forEach((msg) => {
      if (!visibleIds.has(msg.id)) {
        setTimeout(() => {
          setVisibleIds((prev) => new Set([...prev, msg.id]));
        }, 50);
      }
    });
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col gap-5 p-3 sm:p-6 font-lexend">
      {messages.map((msg) => {
        const isVisible = visibleIds.has(msg.id);

        if (msg.role === "bot") {
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2 sm:gap-3 transition-all duration-500 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <img
                src={botImg}
                alt=""
                className="w-8 h-8 sm:w-9 sm:h-9 shadow-md rounded-full flex-shrink-0"
              />
              <div className="flex flex-col items-start min-w-0">
                <span className="text-xs font-semibold text-gray-500 mb-1">
                  Medy
                </span>
                <div
                  className={`bg-[#630F10] text-white text-xs sm:text-sm px-3 sm:px-4 py-2.5 sm:py-3
    rounded-tl rounded-tr-2xl rounded-b-2xl max-w-[85%] sm:max-w-sm leading-relaxed break-words
    transition-all duration-500 ease-out
    ${isVisible ? "scale-100" : "scale-95"}`}
                >
                  {msg.text ? msg.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < msg.text.split("\n").length - 1 && <br />}
                    </span>
                  )) : "No response"}
                </div>
              </div>
            </div>
          );
        }

        if (msg.role === "user") {
          return (
            <div
              key={msg.id}
              className={`flex justify-end transition-all duration-500 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div
                className={`bg-[#FFD247] text-xs sm:text-sm px-3 sm:px-4 py-2.5 sm:py-3
                  rounded-tr rounded-tl-2xl rounded-b-2xl max-w-[85%] sm:max-w-sm leading-relaxed break-words
                  transition-all duration-500 ease-out
                  ${isVisible ? "scale-100" : "scale-95"}`}
              >
                {msg.text}
              </div>
            </div>
          );
        }
      })}

      {isTyping && (
        <div className="flex items-start gap-2 sm:gap-3 transition-all duration-500 ease-out opacity-100 translate-y-0">
          <img
            src={botImg}
            alt=""
            className="w-8 h-8 sm:w-9 sm:h-9 shadow-md rounded-full flex-shrink-0"
          />
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold text-gray-500 mb-1">
              Medy
            </span>
            <div className="bg-[#630F10] px-3 sm:px-4 py-2.5 sm:py-3 rounded-tl rounded-tr-2xl rounded-b-2xl">
              <div className="flex gap-1.5 items-center">
                <span className="w-2 h-2 rounded-full bg-white/70 animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 rounded-full bg-white/70 animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 rounded-full bg-white/70 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
