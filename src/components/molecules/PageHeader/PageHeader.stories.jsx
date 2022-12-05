import { PageHeader } from './PageHeader';

export default {
  component: PageHeader,
  title: 'Components/Molecules/PageHeader',
};

const Template = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: 'test-class',
  location: {
    pathname: '/example/storybook/path',
    search: '?example=query',
  },
  labels: {
    storybook: 'Previous Page',
  },
  title: 'Page Title',
  subtitle: 'Page Subtitle',
};
