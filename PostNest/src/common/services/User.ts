import { ISearchUser, IUser, IUserRegistration, IUserResponse } from "@/common/interfaces/user";

const baseUrl = 'http://localhost:3001/api';
// const baseUrl = 'https://sotialnetworkbackend.onrender.com/api';

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

export const userProfile = async (username: string): Promise<IUser> => {
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

export const registrationUser = async (userData: IUserRegistration): Promise<IUserResponse> => {
    const res = await fetch(`${baseUrl}/user`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    return res.json();
}

export const subscribe = async (id: number) => {
    const res = await fetch(`${baseUrl}/follow`, {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({ followedId: id }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (!res.ok) {
        if (res.status === 401) {
            throw new Error('Unauthorized');
        }
        throw new Error('An error occurred: ' + res.status);
    }

    return res.json();
}

export const updateBackground = async (formdata: FormData) => {
    const res = await fetch(`${baseUrl}/background`, {
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

export const updateAvatar = async (formdata: FormData) => {
    const res = await fetch(`${baseUrl}/avatar`, {
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

export const logout = async () => {
    const res = await fetch(`${baseUrl}/logout`, {
        method: "POST",
        credentials: 'include',
    });

    return res.json();
};

export const getFollowers = async (user_id: number) => {
    const res = await fetch(`${baseUrl}/followers/${user_id}`, {
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

export const getFollowing = async (user_id: number) => {
    const res = await fetch(`${baseUrl}/following/${user_id}`, {
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