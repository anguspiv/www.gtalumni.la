import { render, screen } from '@lib/test-utils';
import { TextArea } from './TextArea';

describe('<TextArea />', () => {
  it('should render an TextArea', () => {
    expect.assertions(3);

    render(<TextArea id="test" value="something" label="Example Label" message="test message" />);

    const input = screen.getByLabelText('Example Label');

    expect(input).toHaveAttribute('id', 'test');
    expect(input).toHaveValue('something');
    expect(screen.getByText('test message')).toBeInTheDocument();
  });
});
