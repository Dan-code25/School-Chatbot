// hooks/useChat.ts
import { useState } from "react";
import type { Message } from "../types/message";

const INTRO_MESSAGE: Message = {
  id: 0,
  role: "bot",
  text: "Hello! I'm Medy, the chatbot assistant of Holy Nazarene Christian School. How can I assist you today?",
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([INTRO_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(backendUrl);

  const sendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text,
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    try {
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.reply) {
        throw new Error("Empty response from backend");
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        role: "bot",
        text: data.reply
      };
      console.log(data.reply);
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      let errorText = "Sorry, I'm having trouble connecting. Please try again.";

      if (error instanceof Error) {
        console.error("Chat error:", error.message);
        if (error.message.includes("HTTP")) {
          errorText = `Server error: ${error.message}`;
        }
      }

      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "bot",
        text: errorText,
      };

      setMessages((prev) => [...prev, errorMessage]);

    } finally {
      setIsTyping(false);
    }
  };

  return { messages, isTyping, sendMessage };
}
