export interface Post {
  id: number;
  user: {
    name: string;
    avatar: string;
    username: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  reposts: number;
  timestamp: string;
  liked: boolean;
  reposted: boolean;
}

export interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
  balance: number;
  email: string;
  bio: string;
  followers: number;
  following: number;
}

export interface FriendRequest {
  id: number;
  user: User;
  timestamp: string;
}

export interface Chat {
  id: number;
  user: User & {
    status: 'online' | 'offline' | 'away';
    lastSeen?: string;
  };
  lastMessage: string;
  timestamp: string;
  unread: number;
}