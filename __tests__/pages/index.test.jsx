import { render, screen } from '@testing-library/react';
import IndexPage from '../../pages/index';

describe('<IndexPage />', () => {
  it('renders without crashing', () => {
    expect.assertions(1);

    render(<IndexPage />);

    expect(screen.getByText('Cool Styles')).toBeInTheDocument();
  });
});
