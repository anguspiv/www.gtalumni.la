import { render, screen } from '@testing-library/react';
import { Page } from './Page';

describe('<Page />', () => {
  it('should render the page template', () => {
    expect.assertions(2);

    render(
      <Page>
        <h1>Example Content</h1>
      </Page>,
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Example Content')).toBeInTheDocument();
  });
});
