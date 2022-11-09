import React from 'react';
import './navigation.css';
// import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import logo from '../images/icons/logo.png';

const Navigation = () => (
  <div>
    <nav className="navigation">
      <section className="logo-div">
        <img className="logo-image" src={logo} alt="Maths Magician Logo" />
        Maths Magician
      </section>
      {/* <div className="for-phone hamburger-div">
        <Hamburger
          color="#ff9500"
          direction="right"
          duration={0.8}
          onToggle={(toggle) => {
            if (toggle) {
              return (
                <div>
                  <ul className="phone-ul for-phone">
                    <li className="menu-pop-up-li">Home</li>
                    <li className="menu-pop-up-li">Calculator</li>
                    <li className="menu-pop-up-li">Quotes</li>
                  </ul>
                </div>
              );
            }
            return null;
          }}
        />
      </div> */}
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
  // );
);
export default Navigation;
