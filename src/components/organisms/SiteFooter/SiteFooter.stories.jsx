import { SiteFooter } from './SiteFooter';

export default {
  title: 'Components/Organisms/SiteFooter',
  component: SiteFooter,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <SiteFooter {...args} />;

export const Default = Template.bind({});
Default.args = {};
