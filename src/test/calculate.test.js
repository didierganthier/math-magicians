/* eslint-disable import/extensions */
import '@testing-library/jest-dom';
import calculate from '../logic/calculate';

describe('calculate(obj, number)', () => {
  test('test numbers', () => {
    expect(
      calculate({ total: null, next: null, operation: null }, '7')
    ).toEqual({ next: '7', total: null });
    expect(calculate({ total: '3', next: null, operation: '-' }, '3')).toEqual({
      total: '3',
      next: '3',
      operation: '-',
    });
  });

  test('test operations', () => {
    expect(
      calculate({ total: null, next: '55', operation: null }, '+')
    ).toEqual({ total: '55', next: null, operation: '+' });
    expect(calculate({ total: '11', next: '20', operation: '+' }, '-')).toEqual(
      { total: '31', next: null, operation: '-' }
    );
  });

  test('test AC clear operation', () => {
    expect(
      calculate({ total: null, next: '55', operation: null }, 'AC')
    ).toEqual({ total: '0', next: null, operation: null });
  });

  test('test equal operation', () => {
    expect(calculate({ total: '5', next: '11', operation: 'x' }, '=')).toEqual({
      total: '55',
      next: null,
      operation: null,
    });
  });

  test('test +/- operation', () => {
    expect(
      calculate({ total: '5', next: '11', operation: null }, '+/-')
    ).toEqual({
      total: '5',
      next: '-11',
      operation: null,
    });
  });
});
