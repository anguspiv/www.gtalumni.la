import { InfoPopup } from './InfoPopup';

export default {
  title: 'Components/Molecules/InfoPopup',
  component: InfoPopup,
};

const Template = (args) => <InfoPopup {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'More Info',
  children: 'This is a popup with some information.',
};
