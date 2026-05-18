// src/app/(app)/chat/[id]/page.jsx
import { dummyConversations, dummyMessages } from "@/lib/dummy-data";
import ChatWindow from "@/components/chat/ChatWindow";

export default async function ConversationPage({ params }) {
  const { id } = await params;
  const conversation = dummyConversations.find((c) => c.id === id);

  return <ChatWindow conversation={conversation} />;
}