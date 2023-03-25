import Validator from '../app';

test('1_Validate name first leter not "-"', () => {
  expect(Validator.validateUserName('-atasha_-332s')).toBeFalsy();
});

test('2_Validate name first leter not "_" ', () => {
  expect(Validator.validateUserName('_atasha_-332s')).toBeFalsy();
});

test('3_Validate name first leter not a number ', () => {
  expect(Validator.validateUserName('8atasha_-332s')).toBeFalsy();
});

test('4_Validate name last leter not a number ', () => {
  expect(Validator.validateUserName('Natasha_-332')).toBeFalsy();
});

test('5_Validate name last leter not a "_"', () => {
  expect(Validator.validateUserName('Natasha_-332_')).toBeFalsy();
});

test('6_Validate name last leter not a "-"', () => {
  expect(Validator.validateUserName('Natasha_-332-')).toBeFalsy();
});

test('7_Validate name contains only Abc', () => {
  expect(Validator.validateUserName('Nataшa_-332s')).toBeFalsy();
});

test('8_Validate name contains only "_"', () => {
  expect(Validator.validateUserName('Natasha$-332s')).toBeFalsy();
});

test('9_Validate name contains only "-"', () => {
  expect(Validator.validateUserName('Natasha_%332s')).toBeFalsy();
});

test('10_Validate name contains only 3number', () => {
  expect(Validator.validateUserName('Natasha-3327s')).toBeFalsy();
});
