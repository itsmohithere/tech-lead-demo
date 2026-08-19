import { Button, Input } from './index';

describe('library public API', () => {
  it('exports components and tokens', () => {
    expect(Button).toBeDefined();
    expect(Input).toBeDefined();
  });
});
