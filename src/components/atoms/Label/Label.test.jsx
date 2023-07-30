import { render, screen } from '@lib/test-utils';
import { Label } from './Label';

describe('<Label />', () => {
  it('renders the label with text', () => {
    expect.assertions(1);
    render(<Label htmlFor="input">Label</Label>);
    expect(screen.getByText(/Label/i)).toBeInTheDocument();
  });
});
