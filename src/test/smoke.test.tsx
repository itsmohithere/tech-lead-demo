import { render, screen } from '@testing-library/react';

function TestComponent() {
  return <button>Hello Faster</button>;
}

describe('Jest setup', () => {
  it('renders a component', () => {
    render(<TestComponent />);

    expect(
      screen.getByRole('button', { name: 'Hello Faster' }),
    ).toBeInTheDocument();
  });
});
