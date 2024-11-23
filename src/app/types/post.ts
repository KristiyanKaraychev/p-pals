import { Preview } from './preview';
import { User } from './user';

export interface Post {
    likes: string[];
    _id: string;
    text: string;
    userId: User;
    themeId: Preview;
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
