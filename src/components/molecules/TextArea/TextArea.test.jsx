import userEvent from '@testing-library/user-event';
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

  it('should render a textarea with the InputPopup', async () => {
    expect.assertions(3);

    const user = userEvent.setup();

    const popupContent = 'This is my Example Content to display';

    render(
      <TextArea
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
