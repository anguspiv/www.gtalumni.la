import { InfoButton } from './InfoButton';

export default {
  component: InfoButton,
  title: 'Components/Atoms/InfoButton',
};

const Template = (args) => <InfoButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'More Info',
};
