import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render a button', () => {
    expect.assertions(2);

    const onClick = jest.fn();

    render(<Button onClick={onClick}>My Button</Button>);

    expect(screen.getByRole('button', { name: 'My Button' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'My Button' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render different components as buttons', () => {
    expect.assertions(3);

    const onClick = jest.fn();

    render(
      <Button as="a" onClick={onClick} href="https://example.com">
        My Button
      </Button>,
    );

    expect(screen.getByRole('link', { name: 'My Button' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('link', { name: 'My Button' }));

    expect(onClick).toHaveBeenCalledTimes(1);

    // eslint-disable-next-line react/prop-types
    function Foo({ children, ...props }) {
      return <h1 {...props}>{children}</h1>;
    }

    render(
      // eslint-disable-next-line react/jsx-no-bind
      <Button as={Foo} onClick={onClick}>
        Foo
      </Button>,
    );

    expect(screen.getByRole('heading')).toHaveTextContent('Foo');
  });
});
