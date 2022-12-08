import { screen, render, fireEvent } from '@testing-library/react';
import { atcb_action as addEventToCalendar } from 'add-to-calendar-button';
import { EventCard } from './EventCard';

jest.mock('add-to-calendar-button', () => ({
  atcb_action: jest.fn(),
}));

describe('<EventCard />', () => {
  it('should render the event', () => {
    expect.assertions(7);

    render(
      <EventCard
        title="Example Event"
        slug="example-event"
        startDate="2021-01-01T12:00:00"
        description="This is an example event."
        image="https://picsum.photos/200/300"
        className="example-class"
        location={{
          name: 'Example Location',
          address: {
            street: '123 Example Street',
            street2: 'Suite 123',
            city: 'Example City',
            state: 'Example State',
            zip: '12345',
          },
        }}
      />,
    );

    expect(screen.getByTestId('event-card')).toHaveClass('example-class');
    expect(screen.getByText('Example Event')).toBeInTheDocument();
    expect(screen.getByText('This is an example event.')).toBeInTheDocument();
    expect(screen.getByText('January 1, 2021 @ 12:00 PM')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Example Event' })).toHaveAttribute('src');
    expect(screen.getByRole('button', { name: 'Add To Calendar' })).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/events/2021/01/example-event');
  });

  it('should render the event without an image', () => {
    expect.assertions(1);

    render(
      <EventCard
        title="Example Event"
        slug="example-event"
        startDate="2021-01-01T12:00:00"
        description="This is an example event."
        location={{
          name: 'Example Location',
          address: {
            street: '123 Example Street',
            street2: 'Suite 123',
            city: 'Example City',
            state: 'Example State',
            zip: '12345',
          },
        }}
      />,
    );

    expect(screen.queryByRole('img', { name: 'Example Event' })).not.toBeInTheDocument();
  });

  it('should render the event with an end date', () => {
    expect.assertions(1);

    render(
      <EventCard
        title="Example Event"
        slug="example-event"
        startDate="2021-01-01T12:00:00"
        endDate="2021-01-01T13:00:00"
        description="This is an example event."
        location={{
          name: 'Example Location',
          address: {
            street: '123 Example Street',
            street2: 'Suite 123',
            city: 'Example City',
            state: 'Example State',
            zip: '12345',
          },
        }}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Add To Calendar' }));

    const call = addEventToCalendar.mock.calls[0][0];

    expect(call).toMatchObject({
      name: 'Example Event',
      description: 'This is an example event.',
      location: 'Example Location 123 Example Street Suite 123, Example City, Example State 12345',
      startDate: '2021-01-01',
      startTime: '12:00',
      endDate: '2021-01-01',
      endTime: '13:00',
    });
  });
});
