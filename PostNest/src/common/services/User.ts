import { ISearchUser, IUser } from "@/common/interfaces/user";

const baseUrl = 'http://localhost:3001/api';

export const serachUser = async (value: string): Promise<ISearchUser[]> => {
    const res = await fetch(`${baseUrl}/search/${value}`, {
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

export const userProfile = async(username: string): Promise<IUser> => {
    const res = await fetch(`${baseUrl}/users/${username}`, {
        credentials: 'include',
    });

    if (!res.ok) {
        if (res.status === 401) {
            throw new Error('Unauthorized');
        }
        throw new Error('An error occurred: ' + res.status);
    }

    return res.json();
}
