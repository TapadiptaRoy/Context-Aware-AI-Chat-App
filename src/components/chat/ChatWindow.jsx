// src/components/chat/ChatWindow.jsx
"use client";
import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import InputBar from "./InputBar";
import { dummyMessages } from "@/lib/dummy-data";

export default function ChatWindow({ conversation }) {
  const initialMessages = conversation ? (dummyMessages[conversation.id] || []) : [];
  const [messages, setMessages] = useState(initialMessages);

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted/20">
        <div className="text-center">
          <p className="text-2xl mb-2">💬</p>
          <p className="text-muted-foreground text-sm">
            Select a conversation to start chatting
          </p>
        </div>
      </div>
    );
  }

  function handleSend(content) {
    const newMessage = {
      id: `m${Date.now()}`,
      senderId: "me",
      content,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOwn: true,
    };
    setMessages((prev) => [...prev, newMessage]);
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <ChatHeader conversation={conversation} />
      <MessageList messages={messages} />
      <InputBar onSend={handleSend} />
    </div>
  );
}