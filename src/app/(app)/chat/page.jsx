// src/app/(app)/chat/page.jsx
export default function ChatPage() {
  return (
    <div className="flex-1 flex items-center justify-center bg-muted/20">
      <div className="text-center">
        <p className="text-4xl mb-3">💬</p>
        <p className="font-medium">Welcome to ChatApp</p>
        <p className="text-muted-foreground text-sm mt-1">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
}