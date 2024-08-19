import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__header">Page Not Found</h1>
      <p className="not-found__message">Sorry that address doesn't exist.</p>
      <ul className="navlist">
        <Link className="button" to="/">
          <span className="button__title">Home</span>
        </Link>
      </ul>
    </div>
  );
};

export default NotFound;
