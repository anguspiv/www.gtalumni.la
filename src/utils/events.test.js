import { filterEventsByDate, filterUpcomingEvents, sortEvents } from './events';

const events = [
  {
    title: 'Test Event 5',
    startDate: 'February 15, 2020 12:00 PM PST',
    endDate: 'February 15, 2020 12:00 PM PST',
    description: 'Test Description 5',
    image: 'https://via.placeholder.com/300',
    location: {
      name: 'Test Location 5',
      address: '123 Test St.',
      city: 'Test City',
      state: 'Test State',
      zip: '12345',
    },
    slug: 'test-event-5',
  },
  {
    title: 'Test Event 2',
    startDate: 'January 15, 2020 12:00 PM PST',
    endDate: 'January 15, 2020 12:00 PM PST',
    description: 'Test Description 2',
    image: 'https://via.placeholder.com/300',
    location: {
      name: 'Test Location 2',
      address: '123 Test St.',
      city: 'Test City',
      state: 'Test State',
      zip: '12345',
    },
    slug: 'test-event-2',
  },
  {
    title: 'Test Event 4',
    startDate: 'February 1, 2020 12:00 PM PST',
    endDate: 'February 1, 2020 12:00 PM PST',
    description: 'Test Description 4',
    image: 'https://via.placeholder.com/300',
    location: {
      name: 'Test Location 4',

      address: '123 Test St.',
      city: 'Test City',
      state: 'Test State',
      zip: '12345',
    },
    slug: 'test-event-4',
  },
  {
    title: 'Test Event',
    startDate: 'January 1, 2020 12:00 PM PST',
    endDate: 'January 1, 2020 12:00 PM PST',
    description: 'Test Description',
    image: 'https://via.placeholder.com/300',
    location: {
      name: 'Test Location',
      address: '123 Test St.',
      city: 'Test City',
      state: 'Test State',
      zip: '12345',
    },
    slug: 'test-event',
  },
  {
    title: 'Test Event 3',
    startDate: 'January 30, 2020 12:00 PM PST',
    endDate: 'January 30, 2020 12:00 PM PST',
    description: 'Test Description 3',
    image: 'https://via.placeholder.com/300',
    location: {
      name: 'Test Location 3',
      address: '123 Test St.',
      city: 'Test City',
      state: 'Test State',
      zip: '12345',
    },
    slug: 'test-event-3',
  },
  {
    title: 'Test Event 6',
    startDate: 'December 31, 2019 12:00 PM PST',
    endDate: 'December 31, 2019 12:00 PM PST',
    description: 'Test Description 6',
    image: 'https://via.placeholder.com/300',
    location: {
      name: 'Test Location 6',
      address: '123 Test St.',
      city: 'Test City',
      state: 'Test State',
      zip: '12345',
    },
    slug: 'test-event-6',
  },
];

describe('filterEventsByDate', () => {
  it('should return a list of events after startDate', () => {
    expect.assertions(5);

    const startDate = new Date('January 15, 2020 12:00 PM PST');

    const filtered = filterEventsByDate(events, { startDate });

    expect(filtered).toHaveLength(4);
    expect(filtered[0].title).toBe('Test Event 5');
    expect(filtered[1].title).toBe('Test Event 2');
    expect(filtered[2].title).toBe('Test Event 4');
    expect(filtered[3].title).toBe('Test Event 3');
  });

  it('should return a list of events before endDate', () => {
    expect.assertions(4);

    const endDate = new Date('January 15, 2020 12:00 PM PST');

    const filtered = filterEventsByDate(events, { endDate });

    expect(filtered).toHaveLength(3);
    expect(filtered[0].title).toBe('Test Event 2');
    expect(filtered[1].title).toBe('Test Event');
    expect(filtered[2].title).toBe('Test Event 6');
  });

  it('should return a list of events between startDate and endDate', () => {
    expect.assertions(4);

    const startDate = new Date('January 14, 2020 12:00 PM PST');
    const endDate = new Date('February 2, 2020 12:00 AM PST');

    const filtered = filterEventsByDate(events, { startDate, endDate });

    expect(filtered).toHaveLength(3);
    expect(filtered[0].title).toBe('Test Event 2');
    expect(filtered[1].title).toBe('Test Event 4');
    expect(filtered[2].title).toBe('Test Event 3');
  });
});

describe('filterUpcomingEvents', () => {
  jest.useFakeTimers().setSystemTime(new Date('January 2, 2020 12:00 PM EST')); // January 2, 2020 GMT

  it('should return a list of events in the future', () => {
    expect.assertions(4);

    const upcomingEvents = filterUpcomingEvents(events);

    expect(upcomingEvents).toHaveLength(3);
    expect(upcomingEvents[0].title).toBe('Test Event 2');
    expect(upcomingEvents[1].title).toBe('Test Event 4');
    expect(upcomingEvents[2].title).toBe('Test Event 3');
  });
});

describe('sortEvents', () => {
  it('should return a list of events sorted by date', () => {
    expect.assertions(7);

    const sortedEvents = sortEvents(events);

    expect(sortedEvents).toHaveLength(6);
    expect(sortedEvents[0].title).toBe('Test Event 6');
    expect(sortedEvents[1].title).toBe('Test Event');
    expect(sortedEvents[2].title).toBe('Test Event 2');
    expect(sortedEvents[3].title).toBe('Test Event 3');
    expect(sortedEvents[4].title).toBe('Test Event 4');
    expect(sortedEvents[5].title).toBe('Test Event 5');
  });
});
