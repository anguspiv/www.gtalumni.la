import { SiteNav } from './SiteNav';

export default {
  component: SiteNav,
  title: 'Components/Organisms/SiteNav',
};

const Template = (args) => <SiteNav {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: '',
};
