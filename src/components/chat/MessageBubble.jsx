// src/components/chat/MessageBubble.jsx
export default function MessageBubble({ message }) {
  return (
    <div
      className={`flex ${message.isOwn ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          message.isOwn
            ? "bg-primary text-primary-foreground rounded-br-sm"
            : "bg-muted text-foreground rounded-bl-sm"
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <p
          className={`text-xs mt-1 ${
            message.isOwn
              ? "text-primary-foreground/70 text-right"
              : "text-muted-foreground"
          }`}
        >
          {message.time}
          {message.isOwn && <span className="ml-1">✓✓</span>}
        </p>
      </div>
    </div>
  );
}