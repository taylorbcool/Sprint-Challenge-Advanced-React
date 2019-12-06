import React from 'react';
import { render } from '@testing-library/react';
import PlayerList from './PlayerList';

test('should display players', () => {
    const { getAllByText } = render(<PlayerList />)
    getAllByText(/player/i)
  })