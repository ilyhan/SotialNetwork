export interface IPost {
    id: number;
    user_id: number;
    content?: string;
    media_content?: string[];
    likes_count: number;
    created_at: string;
    liked: boolean;
    username: string;
    avatar?: string;
    first_name: string;
    last_name: string;
};