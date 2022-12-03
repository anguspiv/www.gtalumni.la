import { AddToCalendar } from './AddToCalendar';

export default {
  component: AddToCalendar,
  title: 'Components/Atoms/AddToCalendar',
};

const Template = (args) => <AddToCalendar {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'My Event',
  startDate: '2022-05-14T05:00:00',
  endDate: '2022-05-14T06:00:00',
};
