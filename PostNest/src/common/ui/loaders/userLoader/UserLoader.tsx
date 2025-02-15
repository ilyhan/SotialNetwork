import { CSSProperties } from 'react';
import './style.css';

interface IUserLoaderProps {
    style?: CSSProperties;
};

//TODO доделать для профиля загрузку
const UserLoader = ({ style }: IUserLoaderProps) => {
    return (
        <span className="loader" style={style}></span>
    )
};

export default UserLoader;