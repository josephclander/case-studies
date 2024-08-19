import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlist">
        <Link className="button" to="/">
          <span className="button__title">Home</span>
        </Link>
        <Link className="button" to="/signup">
          <span className="button__title">Sign Up</span>
        </Link>
        <Link className="button" to="/signin">
          <span className="button__title">Sign In</span>
        </Link>
        <Link className="button" to="/signout">
          <span className="button__title">Sign Out</span>
        </Link>
        <Link className="button" to={`/secret`}>
          <span className="button__title">Secret</span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
