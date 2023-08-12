import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InfoButton } from './InfoButton';

describe('<InfoButton />', () => {
  it('renders the default InfoButton', () => {
    expect.assertions(2);

    const onClick = jest.fn();

    render(<InfoButton onClick={onClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'More Info' }));

    expect(screen.getByRole('button', { name: 'More Info' })).toBeInTheDocument();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
