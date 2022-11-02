/* eslint-disable import/extensions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

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
  });
});
