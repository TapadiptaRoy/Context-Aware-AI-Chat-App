// src/components/chat/InputBar.jsx
"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InputBar({ onSend }) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="px-4 py-3 border-t bg-background">
      <div className="flex items-center gap-3">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 rounded-full bg-muted border-none"
        />
        <Button
          onClick={handleSend}
          size="icon"
          className="rounded-full flex-shrink-0"
          disabled={!message.trim()}
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
}