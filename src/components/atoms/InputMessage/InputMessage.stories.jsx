import { InputMessage } from './InputMessage';

export default {
  component: InputMessage,
  title: 'Components/Atoms/InputMessage',
};

const Template = (args) => <InputMessage {...args} />;

export const Default = Template.bind({});

Default.args = {
  error: false,
  children: 'Message',
};
