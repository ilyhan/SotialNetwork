import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextType {
    isAuthorized: boolean;
    userId: number | null;
    login: (id: number) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
    const [userId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch('http://localhost:3001/api/refresh',
                {
                    credentials: 'include',
                });
            if (res.ok) {
                const dataId = await res.json();
                login(dataId);
            }
        };
        checkAuth();
    }, []);

    const login = (id: number) => {
        setIsAuthorized(true);
        setUserId(id);
    };

    const logout = () => {
        setIsAuthorized(false);
        setUserId(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthorized, userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};