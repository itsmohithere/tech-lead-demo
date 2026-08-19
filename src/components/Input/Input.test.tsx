import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './Input';

describe('Input', () => {
  it('renders an input', () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('associates the label with the input', () => {
    render(<Input label="Email" />);

    expect(
      screen.getByRole('textbox', {
        name: 'Email',
      }),
    ).toBeInTheDocument();
  });

  it('allows the user to type', async () => {
    const user = userEvent.setup();

    render(<Input label="Email" />);

    const input = screen.getByRole('textbox', {
      name: 'Email',
    });

    await user.type(input, 'test@example.com');

    expect(input).toHaveValue('test@example.com');
  });

  it('displays helper text', () => {
    render(<Input label="Email" helperText="Enter your work email." />);

    expect(screen.getByText('Enter your work email.')).toBeInTheDocument();
  });

  it('displays an error message', () => {
    render(<Input label="Email" error="Invalid email address." />);

    expect(screen.getByText('Invalid email address.')).toBeInTheDocument();
  });

  it('marks the input as invalid when an error exists', () => {
    render(<Input label="Email" error="Invalid email address." />);

    expect(
      screen.getByRole('textbox', {
        name: 'Email',
      }),
    ).toHaveAttribute('aria-invalid', 'true');
  });

  it('associates the error with the input', () => {
    render(<Input label="Email" error="Invalid email address." />);

    const input = screen.getByRole('textbox', {
      name: 'Email',
    });

    const error = screen.getByText('Invalid email address.');

    expect(input).toHaveAttribute('aria-describedby', error.id);
  });

  it('supports disabled state', () => {
    render(<Input label="Email" disabled />);

    expect(
      screen.getByRole('textbox', {
        name: 'Email',
      }),
    ).toBeDisabled();
  });

  it('forwards the ref', () => {
    const ref = { current: null };

    render(<Input ref={ref} label="Email" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
