// const baseUrl = 'http://localhost:3001/api';
const baseUrl = 'https://sotialnetworkbackend.onrender.com/api';

export const refresh = async () => {
    const res = await fetch(`${baseUrl}/refresh`, {
        credentials: 'include',
    });

    if (res.ok) {
        return res.json();
    }
};

export const login = async (name: string, password: string) => {
    const res = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            username: name,
            password: password,
        })
    });

    if (res.ok) {
        return res.json();
    }
};