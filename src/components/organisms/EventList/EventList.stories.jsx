import { EventList } from './EventList';

export default {
  component: EventList,
  title: 'Components/Organisms/EventList',
};

const Template = (args) => <EventList {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Example Event List',
  events: [
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
    {
      title: 'Example Event 4',
      slug: 'example-event-4',
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
  ],
};
