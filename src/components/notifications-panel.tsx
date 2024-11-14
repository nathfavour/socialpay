import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card } from './ui/card';
import { mockNotifications } from '@/lib/constants';

export function NotificationsPanel() {
  return (
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="space-y-4 p-4">
        {mockNotifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`p-4 transition-colors ${notification.read ? 'bg-background' : 'bg-accent/5'}`}
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={notification.user.avatar} />
                <AvatarFallback>{notification.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p>
                  <span className="font-semibold">{notification.user.name}</span>
                  {' '}
                  <span className="text-muted-foreground">{notification.content}</span>
                </p>
                <p className="text-sm text-muted-foreground">{notification.timestamp}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}