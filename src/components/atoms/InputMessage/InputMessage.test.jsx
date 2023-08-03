import { render, screen } from '@lib/test-utils';
import { InputMessage } from './InputMessage';

describe('<InputMessage />', () => {
  it('should render an InputMessage', () => {
    expect.assertions(1);

    render(<InputMessage error={false}>Message</InputMessage>);

    expect(screen.getByText('Message')).toBeInTheDocument();
  });
});
