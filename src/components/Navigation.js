import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/icons/logo.png';

const Navigation = () => (
  <div>
    <nav className="navigation">
      <section className="logo-div">
        <img className="logo-image" src={logo} alt="Maths Magician Logo" />
        Maths Magician
      </section>
      <section>
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
export default Navigation;
