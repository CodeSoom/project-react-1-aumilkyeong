import React from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { faWalking, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { medias } from '../medias';

import { makeRandomSpot } from '../RandomSpot';

import {
  setRandomSpot,
  setCoordinates,
} from '../slice';

const Navbar = styled.nav({
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

export default function NavbarContainer() {
  const dispatch = useDispatch();

  const menuList = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'History' },
    { id: 3, title: 'Gallery' },
    { id: 4, title: 'FAQ' },
  ];

  function handleClick() {
    const nextRandomSpot = makeRandomSpot('korea');

    dispatch(setRandomSpot(nextRandomSpot));

    const service = new window.google.maps.StreetViewService();

    service.getPanorama({
      location: nextRandomSpot,
      preference: 'best',
      radius: 5000, // meters
    }, (data, status) => {
      if (status !== 'OK') {
        console.error('result code', status);
      }

      const latLng = {
        lat: data.location.latLng.lat(),
        lng: data.location.latLng.lng(),
      };

      dispatch(setCoordinates(latLng));
    });
  }
  return (
    <>
      <Navbar>
        <nav className="navbar-container">
          <NavbarLogo>
            <div className="navbar-logo">
              <FontAwesomeIcon icon={faWalking} color="#d49466" />
              <a href="/">Sanchack: Random Street</a>
            </div>
          </NavbarLogo>
          <NavbarTravel>
            <div className="navbar-travel">
              <button type="button" onClick={handleClick} data-testid="travel-button">
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
      </Navbar>
    </>
  );
}
