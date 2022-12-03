import { Address } from './Address';

export default {
  component: Address,
  title: 'Components/Atoms/Address',
};

const Template = (args) => <Address {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'My Address',
  address: {
    street: '1 North Ave NW',
    city: 'Atlanta',
    state: 'GA',
    zip: '30313',
  },
};
