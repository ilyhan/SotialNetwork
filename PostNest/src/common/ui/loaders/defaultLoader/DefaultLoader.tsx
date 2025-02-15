import { CSSProperties } from 'react';
import './style.css';

interface ILoaderProps {
    style?: CSSProperties;
};

const Loader = ({ style }: ILoaderProps) => {
    return (
        <span className="loader" style={style}></span>
    )
};

export default Loader;