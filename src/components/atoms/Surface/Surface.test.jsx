import { render, screen } from '@testing-library/react';
import { Surface } from './Surface';

describe('<Surface />', () => {
  it('should render the content', () => {
    expect.assertions(1);

    render(<Surface>Foo</Surface>);

    expect(screen.getByText('Foo')).toBeInTheDocument();
  });
});
