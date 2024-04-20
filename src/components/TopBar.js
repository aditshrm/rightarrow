import { Link } from 'react-router-dom';
import logo from '../images/logo-no-background.png';
function TopBar() {
    return (
      <div id="top">
        <div id="logo">
          <img src={logo} alt="logo" id="logo" />
        </div>
        <div id="topbar">
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/todo">To-Do List</Link>
          </nav>
        </div>
      </div>
    );
}
export default TopBar;