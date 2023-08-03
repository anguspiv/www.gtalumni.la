import { InputField } from './InputField';

export default {
  component: InputField,
  title: 'Components/Atoms/InputField',
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'InputField',
};
