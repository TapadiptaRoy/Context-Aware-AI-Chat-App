// src/components/chat/ChatHeader.jsx
export default function ChatHeader({ conversation }) {
  if (!conversation) return null;

  return (
    <div className="px-4 py-3 border-b flex items-center gap-3 bg-background">
      {/* Avatar */}
      <div className="relative">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
          style={{ backgroundColor: conversation.color }}
        >
          {conversation.avatar}
        </div>
        {conversation.online && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-background rounded-full" />
        )}
      </div>

      {/* Name and status */}
      <div>
        <p className="font-semibold text-sm">{conversation.name}</p>
        <p className="text-xs text-muted-foreground">
          {conversation.online ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
}