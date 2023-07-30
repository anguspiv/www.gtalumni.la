import { render, screen } from '@lib/test-utils';
import { Input } from './Input';

describe('<Input />', () => {
  it('should render an Input', () => {
    expect.assertions(3);

    render(<Input id="test" value="something" label="Example Label" message="test message" />);

    const input = screen.getByLabelText('Example Label');

    expect(input).toHaveAttribute('id', 'test');
    expect(input).toHaveValue('something');
    expect(screen.getByText('test message')).toBeInTheDocument();
  });
});
