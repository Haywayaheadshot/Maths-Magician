import React from 'react';
import './navigation.css';
import logo from '../images/icons/logo.png';
import menu from '../images/icons/hamburger-icon.png';

const Navigation = () => {
  // const hamburgerIcon = document.querySelector('.hamburger-section');

  const hambugerHandler = () => (
    console.log('Clicked')
    // const div = document.createElement('div')
  );

  return (
    <div>
      <nav className="navigation">
        <section className="logo-div">
          <img className="logo-image" src={logo} alt="Maths Magician Logo" />
          Maths Magician
        </section>
        <button className="hamburger-button for-phone" type="button" onClick={() => hambugerHandler()}>
          <img className="hamburger" src={menu} alt="Hamburger Icon" />
        </button>
        <section className="for-desktop">
          <ul className="nav-desktop-ul">
            <li><a className="nav-link" href="https://www.facebook.com/">Home</a></li>
            <li><a className="nav-link" href="https://www.facebook.com/">Calculator</a></li>
            <li><a className="nav-link" href="https://www.facebook.com/">Quotes</a></li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default Navigation;
