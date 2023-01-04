import { addDays, subDays, format } from 'date-fns';
import { UpcomingEvents } from './UpcomingEvents';

const FORMAT_STYLE = 'MMMM d, yyyy h:mm a zzz';

export default {
  title: 'Components/Organisms/UpcomingEvents',
  component: UpcomingEvents,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <UpcomingEvents {...args} />;

const today = new Date();

const events = [
  {
    title: 'Test Event',
    startDate: format(today, FORMAT_STYLE),
    endDate: format(today, FORMAT_STYLE),
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
    startDate: format(addDays(today, 10), FORMAT_STYLE),
    endDate: format(addDays(today, 10), FORMAT_STYLE),
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
    startDate: format(addDays(today, 30), FORMAT_STYLE),
    endDate: format(addDays(today, 30), FORMAT_STYLE),
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
    startDate: format(addDays(today, 32), FORMAT_STYLE),
    endDate: format(addDays(today, 32), FORMAT_STYLE),
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
    startDate: format(addDays(today, 45), FORMAT_STYLE),
    endDate: format(addDays(today, 45), FORMAT_STYLE),
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
    startDate: format(subDays(today, 2), FORMAT_STYLE),
    endDate: format(subDays(today, 2), FORMAT_STYLE),
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

export const Default = Template.bind({});

Default.args = {
  events,
  background: 'primary',
};
