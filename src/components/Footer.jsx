import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer({ buttonText, navigation }) {
  return (
    <footer>
      <button
        data-testid="button-next"
        type="button"
      >
        <Link to={navigation}>
          {buttonText}
        </Link>
      </button>
    </footer>
  );
}
