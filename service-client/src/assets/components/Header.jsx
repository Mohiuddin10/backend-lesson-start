import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="navBar">
            <Link to='/services'>Services</Link>
            <Link to='/users'>Users</Link>
            <Link to='/usersNumber'>User Numbers</Link>
        </div>
    );
};

export default Header;