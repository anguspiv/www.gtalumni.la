import PropTypes from 'prop-types';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import socialMediaImage from '@public/img/social-media.jpg';

export const TITLE = 'Georgia Tech Alumni Association of Los Angeles';

export const DESCRIPTION = `
A community of friends, family, students and Alumni of Georgia Tech in
the Los Angeles metropolitan area. Join us for various events from
happy hours, networking events, new and prospective student meet and greets,
and the occasional football watching.
`.trim();

export const KEYWORDS = [
  'Georgia Tech',
  'Georiga Institute of Technology',
  'Alumni',
  'Alumni Association',
  'Georgia Tech Alumni Association',
  'Yellow Jackets',
  'George P. Burdell',
];

export function Head({ title, description, keywords, image }) {
  const { pathname } = useRouter();
  const { NEXT_PUBLIC_VERCEL_URL } = process.env;
  const url = `${NEXT_PUBLIC_VERCEL_URL}${pathname}`;

  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:title" content={title} key="og:title" />

      <meta name="description" content={description} key="description" />
      <meta property="og:description" content={description} key="og:description" />

      <meta name="keywords" content={keywords.join(',')} key="keywords" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={`${NEXT_PUBLIC_VERCEL_URL}${image.src}`} />
      <meta name="twitter:image:alt" content={image.alt} />

      <meta property="og:url" content={url} key="og:url" />

      <meta property="og:site_name" content="Georgia Tech Alumni Association of Los Angeles" />
      <meta property="og:type" content="website" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
};

Head.defaultProps = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  image: {
    src: socialMediaImage.src,
    alt: TITLE,
  },
};

export default Head;
