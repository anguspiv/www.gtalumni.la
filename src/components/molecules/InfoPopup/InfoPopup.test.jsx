import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InfoPopup } from './InfoPopup';

describe('<InfoPopup />', () => {
  it('renders InfoPopup component', () => {
    expect.assertions(3);

    render(
      <InfoPopup label="Test Info">
        <div>InfoPopup Example Content</div>
      </InfoPopup>,
    );

    expect(screen.getByRole('button', { name: 'Test Info' })).toBeInTheDocument();
    expect(screen.queryByText('InfoPopup Example Content')).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Test Info' }));

    expect(screen.getByText('InfoPopup Example Content')).toBeInTheDocument();
  });
});
