import { useChat } from "../hooks/useChat";
import ChatInput from "../components/ChatInput";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import WelcomeHeader from "../components/WelcomeHeader";

export default function ChatPage() {
  const { messages, isTyping, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-screen w-full bg-[#FAFAFA]">
      <Header />
      <WelcomeHeader />
      <MessageList messages={messages} isTyping={isTyping} />
      <ChatInput isTyping={isTyping} sendMessage={sendMessage} />
    </div>
  );
}
