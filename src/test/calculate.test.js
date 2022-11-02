/* eslint-disable import/extensions */
import '@testing-library/jest-dom';
import calculate from '../logic/calculate';

describe('calculate(obj, number)', () => {
  test('test numbers', () => {
    expect(calculate({ total: null, next: null, operation: null }, '7')).toEqual({ next: '7', total: null });
    expect(calculate({ total: '3', next: null, operation: '-' }, '3')).toEqual({ total: '3', next: '3', operation: '-' });
  });

  test('test operations', () => {
    expect(calculate({ total: null, next: '55', operation: null }, '+')).toEqual({ total: '55', next: null, operation: '+' });
    expect(calculate({ total: '11', next: '20', operation: '+' }, '-')).toEqual({ total: '31', next: null, operation: '-' });
  });
});
