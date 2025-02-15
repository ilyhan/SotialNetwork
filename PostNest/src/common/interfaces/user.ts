import { IPost } from "@/common/interfaces/posts";

export interface ISearchUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    avatar?: string;
};

export interface IUser {
    id: number;
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

export interface IUserRegistration {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
};

export interface IUserResponse extends IUserRegistration {
    message?: string;
};

export interface IUserLoginResponse {
    message?: string;
}

export interface ILogin {
    name: string;
    password: string;
}
