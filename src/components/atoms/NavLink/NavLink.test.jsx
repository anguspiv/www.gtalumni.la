import { render, screen } from '@testing-library/react';
import { NavLink } from './NavLink';

describe('<NavLink />', () => {
  it('should render the link', () => {
    expect.hasAssertions();

    render(<NavLink href="/test">See World</NavLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('See World');
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveStyle(`
      color: var(--gt-color-dark-gold);
      text-decoration: none;
      display: inline-block;
      transition: var(--gt-transition-base);
      line-height: 1;
      padding: 0.25rem 0.5rem;
    `);
  });
});
