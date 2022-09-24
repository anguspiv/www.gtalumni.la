import { render, screen } from '@testing-library/react';
import IndexPage from '../../pages/index';

describe('<IndexPage />', () => {
  it('renders without crashing', () => {
    expect.assertions(1);

    render(<IndexPage />);

    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument();
  });
});
