import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

test('renders Navbar with title', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(screen.getByText('My Posts App')).toBeInTheDocument();
});

test('shows Back button on detail page', () => {
  render(
    <MemoryRouter initialEntries={['/detail/1']}>
      <Navbar />
    </MemoryRouter>
  );
  expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
});