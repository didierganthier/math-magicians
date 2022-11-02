import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('should render the content correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
