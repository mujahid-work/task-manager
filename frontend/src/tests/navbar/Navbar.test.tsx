import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../../components/navbar/Navbar';

describe('Navbar Component', () => {
  it('renders Navbar with correct title', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText('My Tasks App')).toBeInTheDocument();
  });

  it('has correct Bootstrap navbar classes', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light', 'shadow-sm');
  });

  it('shows Back button on detail page', () => {
    render(
      <MemoryRouter initialEntries={['/detail/1']}>
        <Navbar />
      </MemoryRouter>
    );
    const backButton = screen.getByRole('button', { name: /back to listing/i });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveClass('btn', 'btn-outline-primary', 'me-2');
  });

  it('back button contains arrow icon', () => {
    render(
      <MemoryRouter initialEntries={['/detail/1']}>
        <Navbar />
      </MemoryRouter>
    );
    const backButton = screen.getByRole('button', { name: /back to listing/i });
    const arrowIcon = backButton.querySelector('i.bi.bi-arrow-left');
    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon).toHaveClass('bi', 'bi-arrow-left', 'me-2');
  });

  it('does not show Back button on home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument();
  });

  // Test 7: Back button navigation functionality
  it('back button navigates to home page', () => {
    const mockNavigate = jest.fn();
    jest.doMock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter initialEntries={['/detail/1']}>
        <Navbar />
      </MemoryRouter>
    );

    const backButton = screen.getByRole('button', { name: /back to listing/i });
    fireEvent.click(backButton);
  });
});
