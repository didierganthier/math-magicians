// Test with Snapshot
// Test with Snapshot
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';

describe('test snapshot', () => {
  test('should render <NotMatch /> correctly', () => {
    const tree = render(
      <Router>
        <App />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
