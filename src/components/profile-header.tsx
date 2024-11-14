import { CreditCard, Edit, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { User } from '@/lib/types';

interface ProfileHeaderProps {
  user: User;
  onEdit: () => void;
  onDeposit: () => void;
}

export function ProfileHeader({ user, onEdit, onDeposit }: ProfileHeaderProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="relative">
        <div className="absolute right-4 top-4 flex space-x-2">
          <Button variant="outline" size="sm" onClick={onEdit}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
          <Button size="sm" onClick={onDeposit}>
            <CreditCard className="mr-2 h-4 w-4" />
            Deposit
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-muted-foreground">@{user.username}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold">₦{user.balance.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Balance</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{user.followers.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{user.following.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Following</p>
          </div>
        </div>
        <p className="text-sm">{user.bio}</p>
      </CardContent>
    </Card>
  );
}