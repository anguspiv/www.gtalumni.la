import { render, screen } from '@testing-library/react';
import { InputField } from './InputField';

describe('<InputField />', () => {
  it('should render an InputField', () => {
    expect.assertions(1);

    render(<InputField>Message</InputField>);

    expect(screen.getByText('Message')).toBeInTheDocument();
  });
});
