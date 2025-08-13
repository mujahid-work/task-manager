import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../../components/card/Card';

describe('Card Component', () => {
  it('renders card with default props', () => {
    render(<Card data-testid='card-component' />);
    const cardElement = screen.getByTestId('card-component');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass('card');
  });

  it('renders card with title', () => {
    const title = 'Test Card Title';
    render(<Card title={title} />);
    const titleElement = screen.getByRole('heading', { level: 5 });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(title);
    expect(titleElement).toHaveClass('card-title');
  });

  it('renders card with subtitle', () => {
    const subtitle = 'Test Card Subtitle';
    render(<Card subtitle={subtitle} />);
    const subtitleElement = screen.getByRole('heading', { level: 6 });
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement).toHaveTextContent(subtitle);
    expect(subtitleElement).toHaveClass('card-subtitle', 'mb-2', 'text-body-secondary');
  });

  it('renders card with children content', () => {
    const childContent = 'This is child content';
    render(
      <Card>
        <p>{childContent}</p>
      </Card>
    );
    const contentElement = screen.getByText(childContent);
    expect(contentElement).toBeInTheDocument();
    expect(contentElement.parentElement).toHaveClass('card-text');
  });

  it('renders card with footer', () => {
    const footerContent = 'Footer Content';
    render(<Card footer={<button>{footerContent}</button>} />);
    const footerButton = screen.getByRole('button', { name: footerContent });
    expect(footerButton).toBeInTheDocument();
    expect(footerButton.parentElement).toHaveClass('mt-3');
  });

  it('applies custom className', () => {
    const customClass = 'custom-card-class';
    render(<Card className={customClass} data-testid='custom-card' />);
    const cardElement = screen.getByTestId('custom-card');
    expect(cardElement).toHaveClass('card', customClass);
  });

  it('renders complete card with all props', () => {
    const props = {
      title: 'Complete Card',
      subtitle: 'Card Subtitle',
      className: 'test-class',
      style: { border: '1px solid blue' },
      footer: <button>Action Button</button>,
    };

    render(
      <Card {...props} data-testid='complete-card'>
        <p>Card body content</p>
      </Card>
    );

    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('Complete Card');
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Card Subtitle');
    expect(screen.getByText('Card body content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action Button' })).toBeInTheDocument();

    const cardElement = screen.getByTestId('complete-card');
    expect(cardElement).toHaveClass('card', 'test-class');
    expect(cardElement).toHaveStyle('border: 1px solid blue');
  });

  it('renders card with subtitle but no title', () => {
    render(<Card subtitle='Only Subtitle' />);
    expect(screen.queryByRole('heading', { level: 5 })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Only Subtitle');
  });

  it('renders card with complex children content', () => {
    render(
      <Card title='Complex Content Card'>
        <div>
          <p>First paragraph</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
          <span>Span element</span>
        </div>
      </Card>
    );

    expect(screen.getByText('First paragraph')).toBeInTheDocument();
    expect(screen.getByText('List item 1')).toBeInTheDocument();
    expect(screen.getByText('List item 2')).toBeInTheDocument();
    expect(screen.getByText('Span element')).toBeInTheDocument();
  });

  it('renders card with React component as footer', () => {
    const FooterComponent = () => (
      <div>
        <button>Primary</button>
        <button>Secondary</button>
      </div>
    );

    render(<Card footer={<FooterComponent />} />);
    expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Secondary' })).toBeInTheDocument();
  });

  it('maintains accessibility standards', () => {
    render(
      <Card title='Accessible Card' subtitle='Accessibility Test' data-testid='accessible-card'>
        <p>This card should be accessible</p>
      </Card>
    );

    const title = screen.getByRole('heading', { level: 5 });
    const subtitle = screen.getByRole('heading', { level: 6 });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();

    const cardElement = screen.getByTestId('accessible-card');
    expect(cardElement).toBeInTheDocument();
  });

  it('handles conditional props correctly', () => {
    const { rerender } = render(<Card data-testid='conditional-card' />);

    let cardElement = screen.getByTestId('conditional-card');
    expect(cardElement).toHaveClass('card');
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();

    rerender(<Card title='New Title' data-testid='conditional-card' />);
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('New Title');
    expect(screen.queryByRole('heading', { level: 6 })).not.toBeInTheDocument();

    rerender(<Card title='New Title' subtitle='New Subtitle' data-testid='conditional-card' />);
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('New Title');
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('New Subtitle');
  });
});
