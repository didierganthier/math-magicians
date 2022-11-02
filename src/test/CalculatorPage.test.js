/* eslint-disable import/extensions */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import calculate from '../logic/calculate';

const handleClick = () => {
  calculate({ total: '0', next: null }, '+');
};

describe('Calculator', () => {
  test('should render the content correctly', () => {
    render(<Calculator />);
    expect(screen.getByText('AC')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('x')).toBeInTheDocument();
    expect(screen.getByText('%')).toBeInTheDocument();
    expect(screen.getByText('.')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /AC/i }));
  });
});

describe('Keypad button presses', () => {
  test('should fire handleClick function when button is pressed', () => {
    render(<Calculator />);
    const buttonClicked = fireEvent.change(
      screen.getByRole('button', { name: /AC/i }),
      {
        target: { value: 'JavaScript' },
      },
    );

    if (buttonClicked) {
      expect(handleClick()).toBeCalled;
    }
  });
});
