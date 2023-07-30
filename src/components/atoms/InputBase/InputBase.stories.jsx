import { InputBase } from './InputBase';

export default {
  component: InputBase,
  title: 'Components/Atoms/InputBase',
};

const Template = (args) => <InputBase {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Placeholder text',
  value: '',
};
