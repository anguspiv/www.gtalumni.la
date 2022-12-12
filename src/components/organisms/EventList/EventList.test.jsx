import { screen, render } from '@testing-library/react';
import { EventList } from './EventList';

describe('<EventList />', () => {
  it('should render the no events list', () => {
    expect.assertions(2);

    render(<EventList title="Example Event List" events={[]} />);

    expect(screen.getByText('Example Event List')).toBeInTheDocument();
    expect(screen.getByText('No events found.')).toBeInTheDocument();
  });

  it('should render the events list', () => {
    expect.assertions(4);

    render(
      <EventList
        title="Example Event List"
        events={[
          {
            title: 'Example Event',
            slug: 'example-event',
            startDate: '2021-01-01T12:00:00',
            endDate: '2021-01-01T13:00:00',
            description: 'This is an example event.',
            image: 'https://picsum.photos/200/300',
            location: {
              name: 'Example Location',
              address: {
                street: '123 Example Street',
                street2: 'Suite 123',
                city: 'Example City',
                state: 'Example State',
                zip: '12345',
              },
            },
          },
          {
            title: 'Example Event 2',
            slug: 'example-event-2',
            startDate: '2021-01-01T12:00:00',
            description: 'This is an example event.',
            image: 'https://picsum.photos/200/300',
            location: {
              name: 'Example Location',
              address: {
                street: '123 Example Street',
                street2: 'Suite 123',
                city: 'Example City',
                state: 'Example State',
                zip: '12345',
              },
            },
          },
          {
            title: 'Example Event 3',
            slug: 'example-event-3',
            startDate: '2021-01-01T12:00:00',
            description: 'This is an example event.',
            location: {
              name: 'Example Location',
              address: {
                street: '123 Example Street',
                street2: 'Suite 123',
                city: 'Example City',
                state: 'Example State',
                zip: '12345',
              },
            },
          },
        ]}
      />,
    );

    expect(screen.getByText('Example Event List')).toBeInTheDocument();
    expect(screen.getByText('Example Event')).toBeInTheDocument();
    expect(screen.getByText('Example Event 2')).toBeInTheDocument();
    expect(screen.getByText('Example Event 3')).toBeInTheDocument();
  });

  it('should render the list with a title link', () => {
    expect.assertions(2);

    render(
      <EventList
        title="Example Event List"
        href="/events"
        events={[
          {
            title: 'Example Event',
            slug: 'example-event',
            startDate: '2021-01-01T12:00:00',
            endDate: '2021-01-01T13:00:00',
            description: 'This is an example event.',
            image: 'https://picsum.photos/200/300',
            location: {
              name: 'Example Location',
              address: {
                street: '123 Example Street',
                street2: 'Suite 123',
                city: 'Example City',
                state: 'Example State',
                zip: '12345',
              },
            },
          },
        ]}
      />,
    );

    expect(screen.getByText('Example Event List')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Example Event List' })).toHaveAttribute(
      'href',
      '/events',
    );
  });
});
