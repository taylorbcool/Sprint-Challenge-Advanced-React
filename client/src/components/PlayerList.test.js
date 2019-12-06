import React from 'react';
import { render } from '@testing-library/react';
import PlayerList from './PlayerList';

test('should display players', () => {
  act(() => {
    /* fire events that update state */
    // ??????
  });
  const { getAllByText } = render(<PlayerList />)
    getAllByText(/player/i)
  })