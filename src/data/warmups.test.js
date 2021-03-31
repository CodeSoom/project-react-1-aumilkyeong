import {
  easierSquat,
  easierHinge,
} from './warmups';

test('easierSquat', () => {
  const exercise = easierSquat('shrimpSquat');

  expect(exercise.name).toBe('bulgarianSplitSquat');

  const noEasierOne = easierSquat('assistedSquat');

  expect(noEasierOne.name).toBe('assistedSquat');
});

test('easierHinge', () => {
  const exercise = easierHinge('nordicCurl');

  expect(exercise.name).toBe('bandedNordicCurl');

  const noEasierOne = easierHinge('romanianDeadlift');

  expect(noEasierOne.name).toBe('romanianDeadlift');
});
