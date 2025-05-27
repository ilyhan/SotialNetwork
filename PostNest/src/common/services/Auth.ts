import { IUserLoginResponse } from "../interfaces/user";

// const baseUrl = 'http://localhost:3001/api';
const baseUrl = 'https://sotialnetworkbackend.onrender.com/api';

export const refresh = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error();
    }

    const res = await fetch(`${baseUrl}/refresh`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (res.ok) {
        return res.json();
    }
};

export const login = async (name: string, password: string): Promise<IUserLoginResponse> => {
    const res = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: name,
            password: password,
        })
    });

    return res.json();
};