import { LocationCard } from './LocationCard';

export default {
  component: LocationCard,
  title: 'Components/Organisms/LocationCard',
};

const Template = (args) => <LocationCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Georgia Tech',
  href: 'https://www.gatech.edu',
  address: {
    street: '1 North Ave NW',
    city: 'Atlanta',
    state: 'GA',
    zip: '30313',
  },
};
