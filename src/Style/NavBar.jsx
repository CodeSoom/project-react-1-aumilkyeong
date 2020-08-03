import styled from '@emotion/styled';

const NavBar = styled.nav({
  '.navbar': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#263343',
    padding: '8px 12px',
  },
  '& a': {
    textDecoration: 'none',
    color: 'white',
  },
  '.navbar-logo': {
    fontSize: '24px',
  },
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
  '@media (max-width: 768px)': {
    '.navbar': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '8px 24px',
    },
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

export default NavBar;
