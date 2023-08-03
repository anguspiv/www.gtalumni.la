import { EventForm } from './EventForm';

export default {
  title: 'Components/Organisms/EventForm',
  component: EventForm,
  argTypes: {
    onSubmit: { action: 'submit' },
  },
};

const Template = (args) => <EventForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
