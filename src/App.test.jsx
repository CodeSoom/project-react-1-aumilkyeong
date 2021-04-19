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
          yuri: true,
          squatSkyReach: false,
          gmbWristPrep: false,
          deadbug: false,
          archHang: false,
          supportHold: false,
          easierSquat: false,
          easierHinge: false,
        },
        strengthwork: {
          pullup: 'pullup',
          squat: 'squat',
          dip: 'dip',
          hinge: 'singleLeggedDeadlift',
          row: 'horizontalRow',
          pushup: 'pushup',
          antiExtension: 'plank',
          antiRotation: 'bandedPallofPress',
          extension: 'reverseHyperextension',
        },
      },
      warmups: [
        {
          name: 'yuri',
          label: '',
        },
      ],
      progressions: {
        pullup: [],
        squat: [],
        dip: [],
        hinge: [],
        row: [],
        pushup: [],
        antiExtension: [],
        antiRotation: [],
        extension: [],
      },
      record: {
        warmup: {},
        strengthwork: {
          pullup: {
            set1: '',
            set2: '',
            set3: '',
          },
          squat: {
            set1: '',
            set2: '',
            set3: '',
          },
          dip: {
            set1: '',
            set2: '',
            set3: '',
          },
          hinge: {
            set1: '',
            set2: '',
            set3: '',
          },
          row: {
            set1: '',
            set2: '',
            set3: '',
          },
          pushup: {
            set1: '',
            set2: '',
            set3: '',
          },
          antiExtension: {
            set1: '',
            set2: '',
            set3: '',
          },
          antiRotation: {
            set1: '',
            set2: '',
            set3: '',
          },
          extension: {
            set1: '',
            set2: '',
            set3: '',
          },
        },
      },
      demo: {
        isDemoMode: false,
        source: [],
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

      expect(container).toHaveTextContent(/Setting/);
      expect(container).toHaveTextContent(/Warmup/);
      expect(container).toHaveTextContent(/Strengthwork/);
    });
  });

  context('with path /workout', () => {
    it('renders WorkoutPage', () => {
      const { container } = renderApp({ path: '/workout' });

      expect(container).toHaveTextContent(/Workout/);
      expect(container).toHaveTextContent(/준비운동/);
      expect(container).toHaveTextContent(/근력운동/);
    });
  });
});
