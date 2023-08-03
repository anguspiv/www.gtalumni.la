import { render, screen, fireEvent, waitFor } from '@lib/test-utils';
import { EventForm } from './EventForm';

describe('<EventForm />', () => {
  it('should render the form', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();

    render(<EventForm onSubmit={onSubmit} />);

    expect(screen.getByRole('form')).toHaveFormValues({
      title: '',
      startDate: '',
      endDate: '',
      'link.url': '',
      'link.label': '',
      'location.name': '',
      'location.url': '',
      'location.address.street': '',
      'location.address.city': '',
      'location.address.state': '',
      'location.address.zip': '',
      description: '',
      details: '',
      'contact.name': '',
      'contact.email': '',
    });

    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Test Title' } });

    await waitFor(() => expect(screen.getByRole('button', { name: /submit/i })).toBeEnabled());

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        title: 'Test Title',
        startDate: '',
        endDate: '',
        link: {
          url: '',
          label: '',
        },
        location: {
          name: '',
          url: '',
          address: {
            street: '',
            city: '',
            state: '',
            zip: '',
          },
        },
        description: '',
        details: '',
        contact: {
          name: '',
          email: '',
        },
      }),
    );
  });

  it('should render the form with initial values', async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();

    const initialValues = {
      title: 'Test Title',
      startDate: '2021-08-01T00:00',
      endDate: '2021-08-01T00:00',
      link: {
        url: 'https://example.com',
        label: 'Example',
      },
      location: {
        name: 'Test Location',
        url: 'https://example.com',
        address: {
          street: '123 Test St',
          city: 'Test City',
          state: 'Test State',
          zip: '12345',
        },
      },
      description: 'Test Description',
      details: 'Test Details',
      contact: {
        name: 'Test Contact',
        email: 'test@test.com',
      },
    };

    render(<EventForm onSubmit={onSubmit} values={initialValues} />);

    expect(screen.getByRole('form')).toHaveFormValues({
      title: 'Test Title',
      startDate: '2021-08-01T00:00',
      endDate: '2021-08-01T00:00',
      'link.url': 'https://example.com',
      'link.label': 'Example',
      'location.name': 'Test Location',
      'location.url': 'https://example.com',
      'location.address.street': '123 Test St',
      'location.address.city': 'Test City',
      'location.address.state': 'Test State',
      'location.address.zip': '12345',
      description: 'Test Description',
      details: 'Test Details',
      'contact.name': 'Test Contact',
      'contact.email': 'test@test.com',
    });

    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
  });
});
