import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { InputBase } from './InputBase';

describe('<InputBase />', () => {
  it('should render an input', () => {
    expect.assertions(4);

    const placeholder = 'Placeholder text';
    const value = '';

    render(<InputBase placeholder={placeholder} value={value} type="text" autocomplete="off" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder');

    expect(screen.getByRole('textbox')).toHaveAttribute('value');

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');

    expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'off');
  });

  it('should render an input with a value', () => {
    expect.assertions(1);

    const placeholder = 'Placeholder text';
    const value = 'Input value';

    render(<InputBase placeholder={placeholder} value={value} />);

    expect(screen.getByRole('textbox')).toHaveValue(value);
  });

  it('should render an input with a ref', () => {
    expect.assertions(1);

    const placeholder = 'Placeholder text';
    const value = 'Input value';
    const ref = createRef();

    render(<InputBase placeholder={placeholder} value={value} ref={ref} />);

    expect(ref.current.tagName).toBe('INPUT');
  });
});
