
// const baseUrl = 'http://localhost:3001/api';
const baseUrl = 'https://sotialnetworkbackend.onrender.com/api';

export const newSupportMessage = async (message: string) => {
    const res = await fetch(`${baseUrl}/support`,{
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message})
    });

    if(!res.ok) {
        if (res.status === 401) {
            throw new Error('Unauthorized');
        }
        throw new Error('An error occurred: ' + res.status);
    }

    return res.json();
}