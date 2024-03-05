import { render, screen } from '@testing-library/react';
import { UpcomingEvents } from './UpcomingEvents';

describe('<UpcomingEvents />', () => {
  jest.useFakeTimers().setSystemTime(new Date('January 2, 2020 12:00 PM EST'));

  const events = [
    {
      title: 'Test Event',
      startDate: 'January 1, 2020 12:00 PM PST',
      endDate: 'January 1, 2020 12:00 PM PST',
      description: 'Test Description',
      image: 'https://via.placeholder.com/300',
      location: {
        name: 'Test Location',
        address: {
          street: '123 Test St.',
          city: 'Test City',
          state: 'Test State',
          zip: '12345',
        },
      },
      slug: 'test-event',
    },
    {
      title: 'Test Event 2',
      startDate: 'January 15, 2020 12:00 PM PST',
      endDate: 'January 15, 2020 12:00 PM PST',
      description: 'Test Description 2',
      image: 'https://via.placeholder.com/300',
      location: {
        name: 'Test Location 2',
        address: {
          street: '123 Test St.',
          city: 'Test City',
          state: 'Test State',
          zip: '12345',
        },
      },
      slug: 'test-event-2',
    },
    {
      title: 'Test Event 3',
      startDate: 'January 30, 2020 12:00 PM PST',
      endDate: 'January 30, 2020 12:00 PM PST',
      description: 'Test Description 3',
      image: 'https://via.placeholder.com/300',
      location: {
        name: 'Test Location 3',
        address: {
          street: '123 Test St.',
          city: 'Test City',
          state: 'Test State',
          zip: '12345',
        },
      },
      slug: 'test-event-3',
    },
    {
      title: 'Test Event 4',
      startDate: 'February 1, 2020 12:00 PM PST',
      endDate: 'February 1, 2020 12:00 PM PST',
      description: 'Test Description 4',
      image: 'https://via.placeholder.com/300',
      location: {
        name: 'Test Location 4',

        address: {
          street: '123 Test St.',
          city: 'Test City',
          state: 'Test State',
          zip: '12345',
        },
      },
      slug: 'test-event-4',
    },
    {
      title: 'Test Event 5',
      startDate: 'February 15, 2020 12:00 PM PST',
      endDate: 'February 15, 2020 12:00 PM PST',
      description: 'Test Description 5',
      image: 'https://via.placeholder.com/300',
      location: {
        name: 'Test Location 5',
        address: {
          street: '123 Test St.',
          city: 'Test City',
          state: 'Test State',
          zip: '12345',
        },
      },
      slug: 'test-event-5',
    },
    {
      title: 'Test Event 6',
      startDate: 'December 31, 2019 12:00 PM PST',
      endDate: 'December 31, 2019 12:00 PM PST',
      description: 'Test Description 6',
      image: 'https://via.placeholder.com/300',
      location: {
        name: 'Test Location 6',
        address: {
          street: '123 Test St.',
          city: 'Test City',
          state: 'Test State',
          zip: '12345',
        },
      },
      slug: 'test-event-6',
    },
  ];

  it('should render', () => {
    expect.assertions(9);

    render(<UpcomingEvents className="test-class" events={events} />);

    expect(screen.getByText('Upcoming Events')).toBeInTheDocument();
    expect(screen.getByTestId('section')).toHaveClass('test-class');

    expect(screen.getAllByTestId('event-card')).toHaveLength(4);
    expect(screen.queryByTestId('Test Event')).not.toBeInTheDocument();
    expect(screen.getByText('Test Event 2')).toBeInTheDocument();
    expect(screen.getByText('Test Event 3')).toBeInTheDocument();
    expect(screen.getByText('Test Event 4')).toBeInTheDocument();
    expect(screen.getByText('Test Event 5')).toBeInTheDocument();
    expect(screen.queryByText('Test Event 6')).not.toBeInTheDocument();
  });
});
