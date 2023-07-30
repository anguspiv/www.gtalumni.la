import { Input } from './Input';

export default {
  component: Input,
  title: 'Components/Molecules/Input',
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  error: false,
  disabled: false,
  label: 'Label',
  id: 'input',
  message: 'Message',
};
