// src/components/sidebar/ConversationItem.jsx
"use client";

export default function ConversationItem({ conversation, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-muted/50 transition-colors ${
        isActive ? "bg-muted" : ""
      }`}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg"
          style={{ backgroundColor: conversation.color }}
        >
          {conversation.avatar}
        </div>
        {/* Online dot */}
        {conversation.online && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm truncate">
            {conversation.name}
          </span>
          <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
            {conversation.time}
          </span>
        </div>
        <div className="flex justify-between items-center mt-0.5">
          <span className="text-xs text-muted-foreground truncate">
            {conversation.lastMessage}
          </span>
          {conversation.unread > 0 && (
            <span className="ml-2 flex-shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {conversation.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}