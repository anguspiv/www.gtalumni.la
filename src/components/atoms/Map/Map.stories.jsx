import { Map } from './Map';

export default {
  component: Map,
  title: 'Components/Atoms/Map',
};

const Template = (args) => <Map {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'My Map',
  address: {
    street: 'North Ave NW',
    street2: 'Suite 300',
    city: 'Atlanta',
    state: 'GA',
    zip: '30332',
  },
  width: '100%',
  height: '100%',
};
