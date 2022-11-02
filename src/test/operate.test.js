/* eslint-disable import/extensions */
import '@testing-library/jest-dom';
import operate from '../logic/operate';

describe('operate(numberOne, numberTwo, operation)', () => {
  it('should add/subtract/multiply/divide numbers', () => {
    expect(operate('3', '9', '+')).toBe('12');
    expect(operate('7', '2', '-')).toBe('5');
    expect(operate('9', '2', 'x')).toBe('18');
    expect(operate('5', '2', '÷')).toBe('2.5');
    expect(operate('4', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0."
    );
  });
});

describe('operate(numberOne, numberTwo, modulus)', () => {
  it('should return error if second number is 0', () => {
    expect(operate('4', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0."
    );
  });

  it('should return modulus of given first and second number', () => {
    expect(operate('7', '4', '%')).toBe('3');
  });
});
