import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from './App';

describe('App', () => {
  it('renders the component showcase', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Tech Lead Demo' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Button' })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Secondary' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Input' })).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });
});

describe('App accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<App />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
