import ReactDOMServer from 'react-dom/server';
import { createElement } from 'react';
import { unified } from 'unified';
import parse from 'remark-parse';
import rehype from 'remark-rehype';
import react from 'rehype-react';
import slug from 'rehype-slug';
import headings from 'rehype-autolink-headings';
import { Link } from '@components/atoms/Link';
import { Image } from '@components/atoms/Image';

export const markdownToHtml = async (markdown) => {
  const result = await unified()
    .use(parse)
    .use(rehype)
    .use(slug)
    .use(headings, {
      behavior: 'wrap',
      properties: {
        className: ['anchor'],
      },
      content: {
        type: 'element',
        tagName: 'span',
        properties: {
          className: ['icon', 'icon-link'],
        },
      },
    })
    .use(react, {
      createElement,
      Fragment: 'fragment',
      components: {
        a: Link,
        img: Image,
      },
    })
    .process(markdown);

  return ReactDOMServer.renderToStaticMarkup(result.result);
};

export default markdownToHtml;
