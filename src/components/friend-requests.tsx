import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FriendRequest } from '@/lib/types';

interface FriendRequestsProps {
  requests: FriendRequest[];
  onAccept: (id: number) => void;
  onDecline: (id: number) => void;
  onViewProfile: (id: number) => void;
}

export function FriendRequests({ requests, onAccept, onDecline, onViewProfile }: FriendRequestsProps) {
  return (
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="space-y-4 p-4">
        {requests.map((request) => (
          <Card key={request.id} className="p-4">
            <div className="flex items-center space-x-4">
              <Avatar className="cursor-pointer" onClick={() => onViewProfile(request.user.id)}>
                <AvatarImage src={request.user.avatar} />
                <AvatarFallback>{request.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="font-semibold cursor-pointer hover:text-accent" 
                    onClick={() => onViewProfile(request.user.id)}>
                  {request.user.name}
                </h4>
                <p className="text-sm text-muted-foreground">@{request.user.username}</p>
                <p className="text-sm text-muted-foreground">{request.timestamp}</p>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="default"
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => onAccept(request.id)}
                >
                  Accept
                </Button>
                <Button 
                  variant="outline"
                  className="text-destructive hover:bg-destructive/10"
                  onClick={() => onDecline(request.id)}
                >
                  Decline
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}