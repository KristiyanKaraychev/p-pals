export interface User {
    themes: string[];
    posts: string[];
    _id: string;
    tel: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
    updatedAt: string;
    __v: number;
}

export interface AuthenticationUser {
    username: string;
    email: string;
    tel?: string;
    password: string;
    _id: string;
}

export interface ProfileDetails {
    username: string;
    email: string;
    tel?: string;
    description?: string;
    location?: string;
    created_at?: string;
    themes?: string[];
    posts?: string[];
}
