const steps = [
  {
    path: '/',
    prevPath: '/',
    nextPath: '/checkin',
    buttonText: 'Click to start',
  },
  {
    path: '/checkin',
    prevPath: '/',
    nextPath: '/checkin/warmup',
    buttonText: 'Set your warmup routine',
  },
  {
    path: '/checkin/warmup',
    prevPath: '/checkin',
    nextPath: '/checkin/strengthwork',
    buttonText: 'Set your strength work routine',
  },
  {
    path: '/checkin/strengthwork',
    prevPath: '/checkin/warmup',
    nextPath: '/workout',
    buttonText: 'Exercise',
  },
  {
    path: '/workout',
    prevPath: '/checkin/strengthwork',
    nextPath: '/checkout',
    buttonText: 'Finish',
  },
  {
    path: '/checkout',
    prevPath: '/workout',
    nextPath: '/checkout',
    buttonText: '',
  },
];

export default steps;
