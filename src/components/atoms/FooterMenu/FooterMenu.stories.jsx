import { FooterMenu } from './FooterMenu';

export default {
  title: 'Components/Atoms/FooterMenu',
  component: FooterMenu,
};

const Template = (args) => (
  <FooterMenu {...args}>
    <li>
      <a href="https://www.google.com">Google</a>
    </li>
    <li>
      <a href="https://www.google.com">Google</a>
    </li>
    <li>
      <a href="https://www.google.com">Google</a>
    </li>
  </FooterMenu>
);

export const Default = Template.bind({});
Default.args = {
  title: 'test title',
};
