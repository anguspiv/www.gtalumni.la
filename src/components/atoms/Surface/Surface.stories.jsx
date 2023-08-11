import { Surface } from './Surface';

export default {
  title: 'Components/Atoms/Surface',
  component: Surface,
  argTypes: {
    children: {
      description: 'The content of the component.',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => <Surface {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Surface',
};
