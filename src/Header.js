import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet, Link } from "react-router-dom";
import { useStateContext } from './StateProvider';

function Header() {

  const initialState = useStateContext();

  return (
    <div className="header container mx-auto p-2">
      <div className="row">
        <div className="col-3">
          <div className="header__logo">
              <Link className="text-decoration-none" to="/">
                  <StorefrontIcon className="header__logoImage d-inline align-middle" fontSize="large" />
                  <h3 className="header__logoTitle d-inline align-middle">eSHOP</h3>
              </Link>
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
                      <Link className="text-decoration-none" to="login">
                        <span className="nav__itemLineTwo">Sign In</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <span className="nav__itemLineOne clearfix">Your</span>
                      <span className="nav__itemLineTwo">Shop</span>
                    </li>
                    <li className="nav-item itemBasket">                    
                      <Link className="text-decoration-none" to="checkout">
                        <ShoppingBasketIcon />
                        <span className="nav__itemLineTwo">{initialState.basket.length}</span>
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header