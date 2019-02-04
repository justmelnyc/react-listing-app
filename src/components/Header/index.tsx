import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../utils/imageImports';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img src={images.logo} alt="auto1 logo" className="brand-logo" />
        </Link>
      </div>
      <div>
        <span className="menu-item">Purchase</span>
        <span className="menu-item">My Orders</span>
        <span className="menu-item">Sell</span>
      </div>
    </div>
  );
};
export default Header;
