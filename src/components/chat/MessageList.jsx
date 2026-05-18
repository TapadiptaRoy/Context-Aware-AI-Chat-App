// src/components/chat/MessageList.jsx
"use client";
import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function MessageList({ messages }) {
  const bottomRef = useRef(null);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!messages || messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground text-sm">
          No messages yet. Say hello! 👋
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      {/* Date divider */}
      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground">Today</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}

      {/* Anchor to scroll to */}
      <div ref={bottomRef} />
    </div>
  );
}