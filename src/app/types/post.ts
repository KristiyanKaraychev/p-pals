import { Comment } from './comment';
import { User } from './user';

export interface Post {
    subscribers: string[];
    posts: Comment[];
    _id: string;
    themeName: string;
    userId: User;
    created_at: string;
    updatedAt: string;
    __v: number;
}
