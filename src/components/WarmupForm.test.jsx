import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import WarmupForm from './WarmupForm';

jest.mock('react-redux');

describe('WarmupForm', () => {
  const config = {
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
    const { container, getByTestId } = render(
      <WarmupForm
        config={config}
        labels={labels}
        onChange={handleChange}
      />,
    );

    expect(container).toHaveTextContent('준비운동');

    const form = getByTestId('form-warmup');

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
      <WarmupForm
        config={config}
        labels={labels}
        onChange={handleChange}
      />,
    );

    const yuri = getByLabelText('Yuri\'s Shoulder Band Warmup');
    fireEvent.click(yuri);
    expect(handleChange).toBeCalledTimes(1);
  });
});
