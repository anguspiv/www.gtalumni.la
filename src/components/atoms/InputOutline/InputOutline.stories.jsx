import { InputOutline } from './InputOutline';

export default {
  component: InputOutline,
  title: 'Components/Atoms/InputOutline',
};

const Template = (args) => <InputOutline {...args} />;

export const Default = Template.bind({});

Default.args = {
  error: false,
  disabled: false,
};
