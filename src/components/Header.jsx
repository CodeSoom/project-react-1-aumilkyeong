import React from 'react';

export default function Header({ date }) {
  return (
    <header>
      <time
        id="header-date"
        dateTime={date}
      >
        {date}
      </time>
    </header>
  );
}
