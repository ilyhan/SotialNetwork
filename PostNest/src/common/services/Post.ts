import { IPost } from "@/common/interfaces/posts";

const baseUrl = 'http://localhost:3001/api';

export const getPosts = async (): Promise<IPost[]> => {
    const res = await fetch(`${baseUrl}/posts`, {
        credentials: 'include',
    })
    if (!res.ok) {
        if (res.status === 401) {
            throw new Error('Unauthorized');
        }
        throw new Error('An error occurred: ' + res.status);
    }

    return res.json();
};

export const setLike = async (post_id: number) => {
    const res = await fetch(`${baseUrl}/post/like`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            post_id: post_id,
        })
    });

    if (!res.ok) {
        if (res.status === 401) {
            throw new Error('Unauthorized');
        }
        throw new Error('An error occurred: ' + res.status);
    }

    return res.json();
}