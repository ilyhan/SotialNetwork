import { IGetPostsParams, IPost } from "@/common/interfaces/posts";

// const baseUrl = 'http://localhost:3001/api';
const baseUrl = 'https://sotialnetworkbackend.onrender.com/api';


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

export const getInfinityPosts = async (param: IGetPostsParams): Promise<IPost[]> => {
    const res = await fetch(`${baseUrl}/infinity-post/?page=${param.page}&limit=${param.limit}`, {
        credentials: 'include',
    });

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
};

export const newPost = async (formdata: FormData) => {
    const res = await fetch(`${baseUrl}/newpost`, {
        method: "POST",
        credentials: 'include',
        body: formdata,
    });

    if (!res.ok) {
        if (res.status === 401) {
            throw new Error('Unauthorized');
        }
        throw new Error('An error occurred: ' + res.status);
    }

    return res.json();
};

export const getFavoritePosts = async (): Promise<IPost[]> => {
    const res = await fetch(`${baseUrl}/favorites`, {
        credentials: 'include',
    });

    if (!res.ok) {
        if (res.status === 401) {
            throw new Error('Unauthorized');
        }
        throw new Error('An error occurred: ' + res.status);
    }

    return res.json();
};

export const deletePost = async (post_id: number) => {
    const res = await fetch(`${baseUrl}/delete-post`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ post_id }),
    });

    if (!res.ok) {
        if (res.status === 401) {
            throw new Error('Unauthorized');
        }
        throw new Error('An error occurred: ' + res.status);
    }

    return res.json();
};