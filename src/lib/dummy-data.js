// src/lib/dummy-data.js

export const dummyConversations = [
  {
    id: "1",
    type: "dm",
    name: "Alice",
    lastMessage: "Hey, how are you?",
    time: "9:41 AM",
    unread: 2,
    online: true,
    avatar: "A",
    color: "#7C6FF7",
  },
  {
    id: "2",
    type: "dm",
    name: "Bob",
    lastMessage: "See you tomorrow!",
    time: "8:30 AM",
    unread: 0,
    online: false,
    avatar: "B",
    color: "#2DA771",
  },
  {
    id: "3",
    type: "group",
    name: "Team Chat",
    lastMessage: "John: sounds good 👍",
    time: "Yesterday",
    unread: 0,
    online: false,
    avatar: "T",
    color: "#E07B39",
  },
  {
    id: "4",
    type: "dm",
    name: "Carol",
    lastMessage: "Thanks!",
    time: "Mon",
    unread: 0,
    online: true,
    avatar: "C",
    color: "#E05C5C",
  },
];

export const dummyMessages = {
  "1": [
    {
      id: "m1",
      senderId: "alice",
      content: "Hey! How are you?",
      time: "9:40 AM",
      isOwn: false,
    },
    {
      id: "m2",
      senderId: "me",
      content: "I'm doing great, thanks!",
      time: "9:41 AM",
      isOwn: true,
    },
    {
      id: "m3",
      senderId: "alice",
      content: "Want to grab coffee?",
      time: "9:41 AM",
      isOwn: false,
    },
  ],
  "2": [
    {
      id: "m4",
      senderId: "bob",
      content: "Hey are we still on for tomorrow?",
      time: "8:28 AM",
      isOwn: false,
    },
    {
      id: "m5",
      senderId: "me",
      content: "Yes! See you at 10.",
      time: "8:29 AM",
      isOwn: true,
    },
    {
      id: "m6",
      senderId: "bob",
      content: "See you tomorrow!",
      time: "8:30 AM",
      isOwn: false,
    },
  ],
};