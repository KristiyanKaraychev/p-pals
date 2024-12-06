import { Post } from './post';
import { User } from './user';

export interface Comment {
    likes: string[];
    _id: string;
    text: string;
    userId: User;
    themeId: Post;
    created_at: string;
    updatedAt: string;
    __v: number;

    // title: string;
    // description: string;
    // author: string;
    // date: string;
    // image: string;
    // likes: string;
    // comments: {};
}
