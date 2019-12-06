import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('should contain a search bar', () => {
    const { getAllByText } = render(<App />)
    getAllByText(/search/i)
  })