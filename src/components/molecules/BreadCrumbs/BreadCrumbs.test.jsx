import { render, screen } from '@testing-library/react';
import { BreadCrumbs } from './BreadCrumbs';

describe('<BreadCrumbs />', () => {
  it('should render breadcrumb links', () => {
    expect.assertions(5);

    const location = {
      asPath: '/somewhere/else-where/and-again/foo',
      isReady: true,
    };

    const labels = {
      'and-again': 'And Again or Not',
    };

    render(<BreadCrumbs location={location} className="test-class" labels={labels} />);

    expect(screen.getByRole('link', { name: 'Somewhere' })).toHaveAttribute('href', '/somewhere');

    expect(screen.queryByText('Foo')).not.toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'And Again or Not' })).toHaveAttribute(
      'href',
      '/somewhere/else-where/and-again',
    );

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');

    expect(screen.getByTestId('breadcrumbs')).toHaveClass('test-class');
  });
});
