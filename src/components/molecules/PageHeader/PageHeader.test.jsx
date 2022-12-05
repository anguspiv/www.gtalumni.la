import { screen, render } from '@testing-library/react';
import { PageHeader } from './PageHeader';

describe('<PageHeader />', () => {
  it('should render the PageHeader component', () => {
    expect.assertions(4);

    const title = 'Page Title';
    const className = 'test-class';
    const location = {
      pathname: '/test/path',
    };

    const labels = {
      test: 'Weee',
    };

    render(
      <PageHeader
        title={title}
        className={className}
        location={location}
        labels={labels}
        subtitle="Test Subtitle"
      />,
    );
    expect(screen.getByRole('heading')).toHaveTextContent(title);
    expect(screen.getByTestId('page-header')).toHaveClass(className);
    expect(screen.getByRole('link', { name: labels.test })).toHaveAttribute('href', '/test');
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('should render the PageHeader component with no location', () => {
    expect.assertions(1);

    const title = 'Page Title';
    const className = 'test-class';

    render(<PageHeader title={title} className={className} />);
    expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument();
  });
});
