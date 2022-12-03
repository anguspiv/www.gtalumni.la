import { render, screen } from '@testing-library/react';
import IndexPage from '../../src/pages/index';

describe('<IndexPage />', () => {
  it('renders without crashing', () => {
    expect.assertions(2);

    render(<IndexPage />);

    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument();
  });
});
