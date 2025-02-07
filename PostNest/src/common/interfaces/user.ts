import { IPost } from "@/common/interfaces/posts";

export interface ISearchUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    avatar?: string;
};

export interface IUser {
    first_name: string;
    last_name: string;
    username: string;
    follower_count: number;
    following_count: number;
    is_following?: boolean;
    avatar?: string;
    background_image?: string;
    posts?: IPost[];
};
