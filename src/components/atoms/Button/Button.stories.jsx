import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Atoms/Button',
  argTypes: {
    onClick: { action: 'clicked' },
    variant: { control: { type: 'select', options: ['primary', 'secondary'] } },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  variant: 'primary',
};
