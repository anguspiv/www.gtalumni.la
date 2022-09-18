import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('<Container />', () => {
  it('should render a container', () => {
    expect.assertions(3);

    render(<Container data-testid="test">Test Child</Container>);

    expect(screen.getByTestId('test')).toBeInTheDocument();
    expect(screen.getByTestId('test')).toHaveTextContent('Test Child');
    expect(screen.getByTestId('test')).toHaveStyle(`
      padding-left: 1rem;
      padding-right: 1rem;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    `);
  });
});
