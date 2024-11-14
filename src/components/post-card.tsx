import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Post } from '@/lib/types';

interface PostCardProps {
  post: Post;
  onLike: (id: number) => void;
  onRepost: (id: number) => void;
}

export function PostCard({ post, onLike, onRepost }: PostCardProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center space-x-4 p-4">
        <Avatar>
          <AvatarImage src={post.user.avatar} />
          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{post.user.name}</p>
              <p className="text-sm text-muted-foreground">@{post.user.username}</p>
            </div>
            <span className="text-sm text-muted-foreground">{post.timestamp}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="mb-4">{post.content}</p>
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="rounded-lg w-full object-cover max-h-96"
          />
        )}
      </CardContent>
      <CardFooter className="p-4 flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onLike(post.id)}
          className={post.liked ? 'text-red-500' : ''}
        >
          <Heart className="mr-2 h-4 w-4" />
          {post.likes}
        </Button>
        <Button variant="ghost" size="sm">
          <MessageCircle className="mr-2 h-4 w-4" />
          {post.comments}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRepost(post.id)}
          className={post.reposted ? 'text-green-500' : ''}
        >
          <Repeat2 className="mr-2 h-4 w-4" />
          {post.reposts}
        </Button>
        <Button variant="ghost" size="sm">
          <Share className="mr-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}