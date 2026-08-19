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
    render(<Button size="lg">Save</Button>);

    expect(screen.getByRole('button')).toHaveClass('h-12');
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
