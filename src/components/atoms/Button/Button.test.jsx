import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render', () => {
    expect.assertions(2);

    const onClick = jest.fn();

    render(<Button onClick={onClick}>My Button</Button>);

    expect(screen.getByRole('button', { name: 'My Button' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'My Button' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
