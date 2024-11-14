"use client";

import { useState } from 'react';
import { Home, MessageSquare, Users, Bell, Settings, Send, UserPlus, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ThemeProvider } from '@/components/theme-provider';
import { PostCard } from '@/components/post-card';
import { ProfileHeader } from '@/components/profile-header';
import { ChatList } from '@/components/chat-list';
import { FriendRequests } from '@/components/friend-requests';
import type { Post, User, Chat, FriendRequest } from '@/lib/types';

type Page = 'home' | 'chat' | 'friends' | 'requests' | 'notifications' | 'settings' | 'profile';

const mockPosts: Post[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  user: {
    name: ['Chioma Okonkwo', 'Babajide Ogunleye', 'Aisha Mohammed', 'Oluwaseun Adebayo'][i % 4],
    username: ['chioma_fintech', 'baj_payments', 'aisha_tech', 'seun_pay'][i % 4],
    avatar: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    ][i % 4],
  },
  content: [
    'Just completed my first international transfer using SocialPay! The future of payments is social 🚀',
    'Check out my new store setup! Now accepting payments through SocialPay 🏪',
    'SocialPay making life easier one transaction at a time 💫',
    'Loving the new features on SocialPay! Who else is excited? 🎉'
  ][i % 4],
  image: i % 3 === 0 ? 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a' : undefined,
  likes: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 100),
  reposts: Math.floor(Math.random() * 50),
  timestamp: `${Math.floor(Math.random() * 24)}h ago`,
  liked: false,
  reposted: false,
}));

const mockChats: Chat[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  user: {
    id: i + 1,
    name: ['Ada Johnson', 'Kwame Brown', 'Zainab Ali', 'Chidi Okafor', 'Fatima Hassan'][i % 5],
    username: ['ada_j', 'kwame_b', 'zainab_a', 'chidi_o', 'fatima_h'][i % 5],
    avatar: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    ][i % 5],
    status: ['online', 'offline', 'away'][i % 3] as 'online' | 'offline' | 'away',
    balance: 0,
    email: '',
    bio: '',
    followers: 0,
    following: 0,
    lastSeen: i % 3 === 1 ? '2h ago' : undefined,
  },
  lastMessage: [
    'Hey, can you send me the payment details?',
    'Thanks for the quick transfer!',
    'Let\'s catch up soon!',
    'Payment received 👍',
    'How does the new feature work?'
  ][i % 5],
  timestamp: `${Math.floor(Math.random() * 24)}h ago`,
  unread: Math.random() > 0.7 ? Math.floor(Math.random() * 5) + 1 : 0,
}));

const mockFriendRequests: FriendRequest[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  user: {
    id: i + 100,
    name: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'David Brown'][i % 5],
    username: ['john_d', 'jane_s', 'mike_j', 'sarah_w', 'david_b'][i % 5],
    avatar: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    ][i % 5],
    balance: Math.random() * 10000,
    email: `user${i}@example.com`,
    bio: 'Digital payments enthusiast',
    followers: Math.floor(Math.random() * 1000),
    following: Math.floor(Math.random() * 1000),
  },
  timestamp: `${Math.floor(Math.random() * 24)}h ago`,
}));

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [repostedPosts, setRepostedPosts] = useState<number[]>([]);

  const currentUser: User = {
    id: 1,
    name: 'Oluwaseun Adebayo',
    username: 'seun_pay',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&auto=format',
    balance: 250000,
    email: 'seun@example.com',
    bio: 'Digital payments enthusiast | Building the future of social payments in Nigeria 🇳🇬',
    followers: 1234,
    following: 567,
  };

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleRepost = (postId: number) => {
    setRepostedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleAcceptRequest = (requestId: number) => {
    // Handle accept friend request
    console.log('Accepted request:', requestId);
  };

  const handleDeclineRequest = (requestId: number) => {
    // Handle decline friend request
    console.log('Declined request:', requestId);
  };

  const handleViewProfile = (userId: number) => {
    // Handle view profile
    console.log('Viewing profile:', userId);
  };

  const handleSelectChat = (chatId: number) => {
    // Handle chat selection
    console.log('Selected chat:', chatId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="max-w-2xl mx-auto p-4">
            <div className="mb-6">
              <Input
                placeholder="What's on your mind?"
                className="mb-2"
              />
              <div className="flex justify-end">
                <Button className="bg-accent hover:bg-accent/90">
                  <Send className="mr-2 h-4 w-4" />
                  Post
                </Button>
              </div>
            </div>
            <ScrollArea className="h-[calc(100vh-12rem)]">
              {mockPosts.map(post => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLike={handleLike}
                  onRepost={handleRepost}
                />
              ))}
            </ScrollArea>
          </div>
        );
      case 'chat':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold p-4 gradient-bg text-white rounded-lg mb-4">Messages</h2>
            <ChatList chats={mockChats} onSelectChat={handleSelectChat} />
          </div>
        );
      case 'friends':
        return (
          <div className="max-w-2xl mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Friends</h2>
              <Button 
                className="bg-accent hover:bg-accent/90"
                onClick={() => setCurrentPage('requests')}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Friend Requests
              </Button>
            </div>
            {/* Friends list implementation */}
          </div>
        );
      case 'requests':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold p-4 gradient-bg text-white rounded-lg mb-4">
              Friend Requests
            </h2>
            <FriendRequests
              requests={mockFriendRequests}
              onAccept={handleAcceptRequest}
              onDecline={handleDeclineRequest}
              onViewProfile={handleViewProfile}
            />
          </div>
        );
      case 'profile':
        return (
          <div className="max-w-2xl mx-auto p-4">
            <ProfileHeader
              user={currentUser}
              onEdit={() => {}}
              onDeposit={() => {}}
            />
            <ScrollArea className="h-[calc(100vh-16rem)]">
              {mockPosts.slice(0, 5).map(post => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLike={handleLike}
                  onRepost={handleRepost}
                />
              ))}
            </ScrollArea>
          </div>
        );
      default:
        return null;
    }
  };

  return (



    
    <ThemeProvider defaultTheme="system" storageKey="socialpay-theme">
      <div className="flex h-screen bg-background">
        <div className="w-16 border-r flex flex-col items-center py-4 space-y-4 gradient-bg">
          <Button
            onClick={() => setCurrentPage('home')}
            className={`icon hover:bg-white/20 ${currentPage === 'home' ? 'bg-secondary' : 'bg-ghost'}`}
          >
            <Home className="h-5 w-5 text-white" />
          </Button>
          <Button
            onClick={() => setCurrentPage('profile')}
            className={`hover:bg-white/20 ${currentPage === 'profile' ? 'bg-secondary' : 'bg-ghost'}`}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={currentUser.avatar} />
              <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
            </Avatar>
          </Button>
          <Button
            onClick={() => setCurrentPage('chat')}
            className={`hover:bg-white/20 ${currentPage === 'chat' ? 'bg-secondary' : 'bg-ghost'}`}
          >
            <MessageSquare className="h-5 w-5 text-white" />
          </Button>
          <Button
            onClick={() => setCurrentPage('friends')}
            className={`hover:bg-white/20 ${currentPage === 'friends' ? 'bg-secondary' : 'bg-ghost'}`}
          >
            <Users className="h-5 w-5 text-white" />
          </Button>
          <Button
            className={`hover:bg-white/20 ${currentPage === 'notifications' ? 'bg-secondary' : 'bg-ghost'}`}
            onClick={() => setCurrentPage('notifications')}
          >
            <Bell className="h-5 w-5 text-white" />
          </Button>
          <Button
            className={`hover:bg-white/20 ${currentPage === 'settings' ? 'bg-secondary' : 'bg-ghost'}`}
            onClick={() => setCurrentPage('settings')}
          >
            <Settings className="h-5 w-5 text-white" />
          </Button>
        </div>
        <main className="flex-1 overflow-hidden">{renderPage()}</main>
      </div>
    </ThemeProvider>











  );
}

export default App;