import MessageBubble from "./MessageBubble";
import type { Message } from "../types/message";

interface Props {
  messages: Message[];
  isTyping: boolean;
}

export default function MessageList({ messages, isTyping }: Props) {
  return (
    <div className="flex-1 overflow-y-auto px-7 py-8 custom-scroll">
      <div className="max-w-6xl mx-auto flex flex-col">
        <MessageBubble messages={messages} isTyping={isTyping} />
      </div>
    </div>
  );
}
