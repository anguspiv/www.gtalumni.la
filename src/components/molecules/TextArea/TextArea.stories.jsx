import { TextArea } from './TextArea';

export default {
  component: TextArea,
  title: 'Components/Molecules/TextArea',
  argTypes: {
    onChange: { action: 'onChange' },
    message: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});

Default.args = {
  error: false,
  disabled: false,
  label: 'Label',
  id: 'textarea',
  message: 'Message',
  type: 'text',
  max: 500,
  value: undefined,
};
