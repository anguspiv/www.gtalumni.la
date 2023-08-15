import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InfoPopup } from './InfoPopup';

describe('<InfoPopup />', () => {
  it('renders InfoPopup component', async () => {
    expect.assertions(3);

    const user = userEvent.setup();

    render(
      <InfoPopup label="Test Info">
        <div>InfoPopup Example Content</div>
      </InfoPopup>,
    );

    expect(screen.getByRole('button', { name: 'Test Info' })).toBeInTheDocument();
    expect(screen.queryByText('InfoPopup Example Content')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Test Info' }));

    expect(screen.getByText('InfoPopup Example Content')).toBeInTheDocument();
  });
});
