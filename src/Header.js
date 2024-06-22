import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header container mx-auto p-2">
      <div className="row">
        <div className="col-3">
          <div className="header__logo">
            <StorefrontIcon className="header__logoImage" fontSize="large" />
            <h3 className="header__logoTitle">eSHOP</h3>
          </div>
        </div>

        <div className="col-6">
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
            <span className="input-group-text" id="inputGroup-sizing-lg">
              <SearchIcon className="header__searchIcon" />
            </span>
          </div>
        </div>

        <div className="col-3">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div className="navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 column-gap-3">
                  <li className="nav-item">
                    <span className="nav__itemLineOne clearfix">Hello Guest</span>
                    <span className="nav__itemLineTwo">Sign In</span>
                  </li>
                  <li className="nav-item">
                    <span className="nav__itemLineOne clearfix">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                  </li>
                  <li className="nav-item itemBasket">
                    <ShoppingBasketIcon />
                    <span className="nav__itemLineTwo">0</span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header