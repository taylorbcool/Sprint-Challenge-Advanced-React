import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './Searchbar';

test('should contain a search bar', () => {
    const { getByText } = render(<SearchBar />)
    getByText(/search/i)
  })