import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button', () => {
  it('renders with the correct accessible name', () => {
    render(<Button>Save</Button>);

    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  it('defaults to the primary variant', () => {
    render(<Button>Save</Button>);

    expect(screen.getByRole('button')).toHaveClass('bg-action-primary');
  });

  it('supports the secondary variant', () => {
    render(<Button variant="secondary">Cancel</Button>);

    expect(screen.getByRole('button')).toHaveClass('bg-action-secondary');
  });

  it('supports different sizes', () => {
    const { rerender } = render(<Button size="sm">Save</Button>);

    expect(screen.getByRole('button')).toHaveClass('h-8', 'px-3', 'text-sm');

    rerender(<Button size="md">Save</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-10', 'px-4');

    rerender(<Button size="lg">Save</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-12', 'px-5');
  });

  it('shows a spinner and disables the button while loading', () => {
    render(<Button loading>Save</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).not.toHaveTextContent('Save');
    expect(button.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('merges custom classes and forwards native button attributes', () => {
    render(
      <Button
        aria-label="Save changes"
        className="custom-class"
        data-testid="save-button"
      >
        Save
      </Button>,
    );

    const button = screen.getByTestId('save-button');

    expect(button).toHaveClass('custom-class');
    expect(button).toHaveAttribute('aria-label', 'Save changes');
  });

  it('handles user interaction', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Save</Button>);

    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports disabled state', () => {
    render(<Button disabled>Save</Button>);

    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
  });

  it('defaults to type button', () => {
    render(<Button>Cancel</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('allows submit type when explicitly provided', () => {
    render(<Button type="submit">Save</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
