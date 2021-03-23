import React from 'react';

export default function Header({ date }) {
  return (
    <header>
      <time
        data-testid="header-date"
        dateTime={date}
      >
        {date}
      </time>
    </header>
  );
}
