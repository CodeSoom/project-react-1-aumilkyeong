import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      setting: {
        warmup: {
          yuri: false,
          squatSkyReach: false,
          gmbWristPrep: false,
          deadbug: false,
          archHang: false,
          supportHold: false,
          easierSquat: false,
          easierHinge: false,
        },
      },
    }));
  });

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent(/Reddit Bodyweight/);
      expect(container).toHaveTextContent(/스케쥴/);
      expect(container).toHaveTextContent(/난이도/);
    });
  });

  context('with path /setting', () => {
    it('renders SettingPage', () => {
      const { container } = renderApp({ path: '/setting' });

      expect(container).toHaveTextContent(/준비운동/);
      expect(container).toHaveTextContent(/근력운동/);
    });
  });
});
