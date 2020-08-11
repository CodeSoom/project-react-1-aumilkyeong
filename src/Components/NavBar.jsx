import React from 'react';

import styled from '@emotion/styled';

import { faWalking, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { medias } from '../medias';

const NavbarContainer = styled.nav({
  '.navbar-container': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#263343',
    padding: '8px 12px',
    '& a': {
      textDecoration: 'none',
      color: 'white',
    },
  },
  [medias.phone]: {
    '.navbar-container': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '8px 24px',
    },
  },
});

const NavbarLogo = styled.div({
  '.navbar-logo': {
    fontSize: '24px',
  },
});

const NavbarTravel = styled.div({
  '& button': {
    background: 'none',
    border: 'none',
  },
  [medias.phone]: {
    alignItems: 'center',
    width: '100%',
  },
});

const NavbarMenu = styled.div({
  '.navbar-menu': {
    display: 'flex',
    listStyle: 'none',
    paddingLeft: 0,
    '& li': {
      padding: '4px 6px',
      '& :hover': {
        backgroundColor: '#d49466',
        borderRadius: '4px',
      },
    },
  },
  [medias.phone]: {
    '.navbar-menu': {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      '& ul': {
        paddingInlineStart: '0px',
      },
      '& li': {
        width: '100%',
        textAlign: 'center',
      },
    },
  },
});

const menuList = [
  { id: 1, title: 'Home' },
  { id: 2, title: 'History' },
  { id: 3, title: 'Gallery' },
  { id: 4, title: 'FAQ' },
];

function handleClick() {
  // TODO: 새로운 장소로 이동
  console.log('clicked');
}

export default function NavBar() {
  return (
    <>
      <NavbarContainer>
        <nav className="navbar-container">
          <NavbarLogo>
            <div className="navbar-logo">
              <FontAwesomeIcon icon={faWalking} color="#d49466" />
              <a href="/">Sanchack: Random Street</a>
            </div>
          </NavbarLogo>
          <NavbarTravel>
            <div className="navbar-travel">
              <button type="button" onClick={handleClick}>
                <FontAwesomeIcon icon={faForward} size="2x" color="#d49466" />
              </button>
            </div>
          </NavbarTravel>
          <NavbarMenu>
            <ul className="navbar-menu">
              {menuList.map((menu) => (
                <li key={menu.id}>
                  <a href="/">{menu.title}</a>
                </li>
              ))}
            </ul>
          </NavbarMenu>
        </nav>
      </NavbarContainer>
    </>
  );
}
