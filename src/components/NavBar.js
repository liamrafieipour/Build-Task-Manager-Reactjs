import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="link">
                <Link to="/">My Tasks</Link>
                <Link to="/create-task">New Task</Link>


            </div>

        </div>
    );
}

export default NavBar;