import React, { useState } from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import logo from '../images/icons/logo.png';

function Navigation() {
  const [isOpen, isClosed] = useState(false);
  return (
    <div>
      <nav className="navigation">
        <section className="logo-div">
          <img className="logo-image" src={logo} alt="Maths Magician Logo" />
          Maths Magician
        </section>
        <section className="for-phone">
          <Hamburger
            color="#fff"
            duration={0.8}
            toggled={isOpen}
            toggle={isClosed}
          />
          {isOpen
            ? (
              <ul className="nav-ul-phone">
                <li>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/calculator">
                    Calculator
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/quotes">
                    Quotes
                  </NavLink>
                </li>
              </ul>
            ) : null}
        </section>
        <section className="for-desktop">
          <ul className="nav-ul">
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/calculator">
                Calculator
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/quotes">
                Quotes
              </NavLink>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
}
export default Navigation;
