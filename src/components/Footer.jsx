import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer({ buttonText, navigation, handleNext }) {
  return (
    <footer>
      <button
        id="button-next"
        type="button"
        onClick={handleNext}
      >
        <Link to={navigation}>
          {buttonText}
        </Link>
      </button>
    </footer>
  );
}
