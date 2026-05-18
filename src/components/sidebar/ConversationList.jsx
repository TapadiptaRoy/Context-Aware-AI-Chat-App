// src/components/sidebar/ConversationList.jsx
"use client";
import ConversationItem from "./ConversationItem";

export default function ConversationList({
  conversations,
  activeId,
  onSelect,
}) {
  return (
    <div className="flex-1 overflow-y-auto">
      {conversations.map((conv) => (
        <ConversationItem
          key={conv.id}
          conversation={conv}
          isActive={conv.id === activeId}
          onClick={() => onSelect(conv.id)}
        />
      ))}
    </div>
  );
}