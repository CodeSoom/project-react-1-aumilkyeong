import {
  easierSquat,
  easierHinge,
} from './warmups';

test('easierSquat', () => {
  const exercise = easierSquat.getEasierSquat('shrimpSquat');

  expect(exercise.name).toBe('bulgarianSplitSquat');

  const noEasierOne = easierSquat.getEasierSquat('assistedSquat');

  expect(noEasierOne.name).toBe('assistedSquat');
});

test('easierHinge', () => {
  const exercise = easierHinge.getEasierHinge('nordicCurl');

  expect(exercise.name).toBe('bandedNordicCurl');

  const noEasierOne = easierHinge.getEasierHinge('romanianDeadlift');

  expect(noEasierOne.name).toBe('romanianDeadlift');
});
