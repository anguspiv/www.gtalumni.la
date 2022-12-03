import { DirectionsLink } from './DirectionsLink';

export default {
  component: DirectionsLink,
  title: 'Components/Atoms/DirectionsLink',
};

const Template = (args) => <DirectionsLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  address: {
    street: 'North Ave NW',
    street2: 'Suite 300',
    city: 'Atlanta',
    state: 'GA',
    zip: '30332',
  },
};
