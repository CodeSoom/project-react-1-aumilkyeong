import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import SettingPage from './Setting';

jest.mock('react-redux');

describe('SettingPage', () => {
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

  it('renders without crash', () => {
    render(<SettingPage />);
  });
  // describe('strength work setting', () => {
  //   it('renders strength work options', () => {
  //     const { container, getByTestId } = render(
  //       <SettingPage />,
  //     );

  //     expect(container).toHaveTextContent('근력운동');

  //     const form = getByTestId('form-strenghwork');

  //     expect(form).toHaveFormValues({
  //       pullup: 'pullup',
  //       squat: 'squat',
  //       dip: 'dip',
  //       hinge: 'romanian-deadlift',
  //       row: 'incline-row',
  //       pushup: 'pushup',
  //     });
  //   });

  //   it('can select an exercise from pullup progression', () => {
  //     const { container, getByTestId } = render(
  //       <SettingPage />,
  //     );

  //     // TODO: 라디오 버튼 영역 타겟 학습하고 구현
  //   });
  // });
});
