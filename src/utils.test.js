import {
  get,
  equal,
  getStepByPath,
} from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  const name = get('name');
  const age = get('age');

  expect(name(state)).toBe('홍길동');
  expect(age(state)).toBeUndefined();
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  const trueCase = equal('name', '홍길동');
  const falseCase = equal('name', '임꺽정');

  expect(trueCase(state)).toBeTruthy();
  expect(falseCase(state)).toBeFalsy();
});

test('getStepByPath', () => {
  const steps = [
    {
      path: '/',
      prevPath: '',
      nextPath: '',
      buttonText: '',
    },
    {
      path: '/foo',
      prevPath: '',
      nextPath: '',
      buttonText: '',
    },
  ];

  const root = getStepByPath('/')(steps);

  expect(root.path).toBe('/');
});
