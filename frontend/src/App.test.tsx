import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./components/navbar/Navbar', () => {
  return function MockNavbar() {
    return <nav data-testid='navbar'>Mocked Navbar</nav>;
  };
});

jest.mock('./pages/task/taskListingPage', () => {
  return function MockListingPage() {
    return <div data-testid='listing-page'>Mocked Listing Page</div>;
  };
});

jest.mock('./pages/task/taskDetailsPage', () => {
  return function MockDetailPage() {
    return <div data-testid='detail-page'>Mocked Detail Page</div>;
  };
});

describe('App Component', () => {
  it('renders navbar and listing page on home route', () => {
    render(<App />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByText('Mocked Navbar')).toBeInTheDocument();

    expect(screen.getByTestId('listing-page')).toBeInTheDocument();
    expect(screen.getByText('Mocked Listing Page')).toBeInTheDocument();

    expect(screen.queryByTestId('detail-page')).not.toBeInTheDocument();
  });

  it('has correct structure with proper container styling', () => {
    const { container } = render(<App />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();

    const mainContainer = container.querySelector('div[style*="padding: 1rem"]');
    expect(mainContainer).toBeInTheDocument();

    expect(mainContainer).toContainElement(screen.getByTestId('listing-page'));

    expect(container.firstChild).toBeInTheDocument();
  });
});
