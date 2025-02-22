import { Link } from "react-router-dom";
import logo from '/public/images/logo1.png';

const Logo = () => {
    return(
        <Link to="/home">
            <img src={logo} alt="logo" height={50}/>
        </Link>
    );
};

export default Logo;