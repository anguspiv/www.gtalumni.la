import userEvent from '@testing-library/user-event';
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

  it('should render an input with the InputPopup', async () => {
    expect.assertions(3);

    const user = userEvent.setup();

    const popupContent = 'This is my Example Content to display';

    render(
      <Input
        id="test"
        value="something"
        label="Example"
        message="test message"
        popup={popupContent}
      />,
    );

    const input = screen.getByLabelText('Example');

    expect(input).toHaveAttribute('id', 'test');

    expect(screen.getByRole('button', { name: 'More Info about Example' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'More Info about Example' }));

    expect(screen.getByText(popupContent)).toBeInTheDocument();
  });
});
