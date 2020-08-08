import React from 'react';

import { Global } from '@emotion/core';

import { faWalking, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Style from '../Style/NavBar';

function ForwardButton({ onClick }) {
  return (
    <div className="navbar-forward">
      <button type="button" onClick={onClick}>
        <FontAwesomeIcon icon={faForward} size="2x" color="#d49466" />
      </button>
    </div>
  );
}

const initStyle = {
  '& body': {
    margin: 0,
    fontFamily: 'Source Sans Pro',
  },
};

const menuList = [
  { id: 1, title: 'Home' },
  { id: 2, title: 'History' },
  { id: 3, title: 'Gallery' },
  { id: 4, title: 'FAQ' },
];

export default function NavBar() {
  return (
    <Style>
      <Global styles={initStyle} />
      <nav className="navbar">
        <div className="navbar-logo">
          <FontAwesomeIcon icon={faWalking} color="#d49466" />
          <a href="/">Sanchack: Random Street</a>
        </div>
        <ForwardButton />
        <ul className="navbar-menu">
          {menuList.map((menu) => (
            <li key={menu.id}>
              <a href="/">{menu.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </Style>
  );
}
