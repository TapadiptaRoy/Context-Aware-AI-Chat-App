// src/components/sidebar/Sidebar.jsx
"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Search, SquarePen } from "lucide-react";
import { Input } from "@/components/ui/input";
import ConversationList from "./ConversationList";
import { dummyConversations } from "@/lib/dummy-data";

export default function Sidebar() {
  const router = useRouter();
  const params = useParams();
  const activeId = params?.id;
  const [search, setSearch] = useState("");

  const filtered = dummyConversations.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleSelect(id) {
    router.push(`/chat/${id}`);
  }

  return (
    <div className="w-80 border-r flex flex-col h-full bg-background">
      {/* Header */}
      <div className="px-4 py-4 border-b flex items-center justify-between">
        <h1 className="text-xl font-bold">Chats</h1>
        <button className="p-2 hover:bg-muted rounded-full transition-colors">
          <SquarePen size={20} className="text-muted-foreground" />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-muted border-none h-9"
          />
        </div>
      </div>

      {/* Conversation list */}
      <ConversationList
        conversations={filtered}
        activeId={activeId}
        onSelect={handleSelect}
      />

      {/* Bottom user info */}
      <div className="px-4 py-3 border-t flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center font-semibold text-sm">
          Y
        </div>
        <div>
          <p className="text-sm font-medium">You</p>
          <p className="text-xs text-muted-foreground">Online</p>
        </div>
      </div>
    </div>
  );
}