import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import WarmupSetting from './WarmupSetting';

jest.mock('react-redux');

describe('WarmupSetting', () => {
  const setting = {
    yuri: false,
    squatSkyReach: false,
    gmbWristPrep: false,
    deadbug: false,
    archHang: false,
    supportHold: false,
    easierSquat: false,
    easierHinge: false,
  };
  const labels = {
    yuri: 'Yuri\'s Shoulder Band Warmup',
    squatSkyReach: '',
    gmbWristPrep: '',
    deadbug: '',
    archHang: '',
    supportHold: '',
    easierSquat: '',
    easierHinge: '',
  };

  const handleChange = jest.fn();

  it('renders warmup options', () => {
    const { container } = render(
      <WarmupSetting
        setting={setting}
        labels={labels}
        onChange={handleChange}
      />,
    );

    expect(container).toHaveTextContent('Warmup');

    const form = container.querySelector('#setting-warmup');

    expect(form).toHaveFormValues({
      yuri: false,
      squatSkyReach: false,
      gmbWristPrep: false,
      deadbug: false,
      archHang: false,
      supportHold: false,
      easierSquat: false,
      easierHinge: false,
    });
  });

  it('calls the warmup select event handler', () => {
    const { getByLabelText } = render(
      <WarmupSetting
        setting={setting}
        labels={labels}
        onChange={handleChange}
      />,
    );

    const yuri = getByLabelText('Yuri\'s Shoulder Band Warmup');
    fireEvent.click(yuri);
    expect(handleChange).toBeCalledTimes(1);
  });
});
