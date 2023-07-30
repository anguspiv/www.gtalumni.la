import { Label } from './Label';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    htmlFor: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => <Label {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  htmlFor: 'input',
  error: false,
  disabled: false,
};
