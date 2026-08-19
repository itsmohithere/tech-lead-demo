import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Input } from './Input';

describe('Input accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(
      <Input aria-label="Name" placeholder="Enter your name" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
