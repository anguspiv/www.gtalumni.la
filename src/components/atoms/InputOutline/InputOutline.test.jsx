import { render, screen } from '@lib/test-utils';
import { InputOutline } from './InputOutline';

describe('<InputOutline />', () => {
  it('should render an InputOutline', () => {
    expect.assertions(2);

    render(<InputOutline>Child</InputOutline>);

    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.getByTestId('input-outline')).toHaveStyle(`
      border-color: var(--gt-color-light-gray);
    `);
  });
});
