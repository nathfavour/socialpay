import { useState } from 'react';
import { Send, Phone, Video, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card } from './ui/card';
import type { Chat } from '@/lib/types';

interface ChatWindowProps {
  chat: Chat;
  onClose: () => void;
  onSendMoney: () => void;
  onVoiceCall: () => void;
  onVideoCall: () => void;
}

export function ChatWindow({ chat, onClose, onSendMoney, onVoiceCall, onVideoCall }: ChatWindowProps) {
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-violet-500 to-indigo-500 text-white">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={chat.user.avatar} />
            <AvatarFallback>{chat.user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{chat.user.name}</h3>
            <span className="text-sm opacity-75">
              {chat.user.status === 'online' ? 'Online' : 
               chat.user.status === 'away' ? 'Away' : 'Offline'}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-white/20"
            onClick={onSendMoney}
          >
            <CreditCard className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-white/20"
            onClick={onVoiceCall}
          >
            <Phone className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-white/20"
            onClick={onVideoCall}
          >
            <Video className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {/* Mock messages - you can replace with real messages */}
          <Card className="ml-auto max-w-[80%] p-3 bg-accent text-white">
            Hey! How are you?
          </Card>
          <Card className="mr-auto max-w-[80%] p-3">
            I'm good! Just sent you the payment 😊
          </Card>
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button className="bg-accent hover:bg-accent/90">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}