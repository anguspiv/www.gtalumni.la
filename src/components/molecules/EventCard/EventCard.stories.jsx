import { EventCard } from './EventCard';

export default {
  component: EventCard,
  title: 'Components/Molecules/EventCard',
};

const Template = (args) => <EventCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Example Event',
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
};
