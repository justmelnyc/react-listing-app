import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../utils/imageImports';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="error-container">
        <img src={images.logo} alt="pl" className="logo" />
        <div className="error">404 - Not Found</div>
        <div className="error-msg">Sorry, the page you are looking for does not exist.</div>
        <div className="error-msg">
          You can always go back to the{' '}
          <Link to="/">
            <span className="link">homepage</span>
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default NotFound;
