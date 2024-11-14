import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Chat } from '@/lib/types';

interface ChatListProps {
  chats: Chat[];
  onSelectChat: (chatId: number) => void;
}

export function ChatList({ chats, onSelectChat }: ChatListProps) {
  return (
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="space-y-4 p-4">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center space-x-4 cursor-pointer hover:bg-accent/10 p-3 rounded-lg transition-colors"
            onClick={() => onSelectChat(chat.id)}
          >
            <div className="relative">
              <Avatar>
                <AvatarImage src={chat.user.avatar} />
                <AvatarFallback>{chat.user.name[0]}</AvatarFallback>
              </Avatar>
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
                  ${chat.user.status === 'online' ? 'friend-status-online' : 
                    chat.user.status === 'away' ? 'friend-status-away' : 'friend-status-offline'}`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className="font-semibold truncate">{chat.user.name}</p>
                <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
            </div>
            {chat.unread > 0 && (
              <Badge variant="secondary" className="bg-accent text-white">
                {chat.unread}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}