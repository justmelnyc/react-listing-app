import React from 'react';
import { Link } from 'react-router-dom';
import { TextConstants } from '../../constants/textConstants';
import { images } from '../../utils/imageImports';
import './NotFound.scss';

const NotFound: React.FunctionComponent = React.memo(() => {
  return (
    <div className="not-found-container">
      <div className="error-container">
        <img src={images.logo} alt="pl" className="logo" />
        <div className="error">{TextConstants.notFoundTitle}</div>
        <div className="error-msg">{TextConstants.notFoundDesc}</div>
        <div className="error-msg">
          {TextConstants.notFoundRedirect}
          <Link to="/">
            <span className="link">{` homepage`}</span>
          </Link>
          .
        </div>
      </div>
    </div>
  );
});

export default NotFound;
