import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const H1 = 'h1';
const H2 = 'h2';
const H3 = 'h3';
const H4 = 'h4';
const H5 = 'h5';
const H6 = 'h6';
const SUBTITLE_1 = 'subtitle1';
const SUBTITLE_2 = 'subtitle2';
const BODY_1 = 'body1';
const BODY_2 = 'body2';
const BUTTON = 'button';
const P = 'p';
const SPAN = 'span';

const headingCSS = css`
  font-family: var(--gt-font-family-subtitle);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  color: var(--gt-color-text-title);
`;

const h1CSS = css`
  ${headingCSS}
  font-family: var(--gt-font-family-title);
  font-size: 2.5rem;
  color: var(--gt-color-text-title);
`;

const h2CSS = css`
  ${headingCSS}
  font-size: 2.12rem;
`;

const h3CSS = css`
  ${headingCSS}
  font-size: 1.75rem;
`;

const h4CSS = css`
  ${headingCSS}
  font-size: 1.5rem;
`;

const h5CSS = css`
  ${headingCSS}
  font-size: 1.25rem;
`;

const h6CSS = css`
  ${headingCSS}
  font-size: 1rem;
  color: var(--gt-color-text-subtitle);
`;

const subtitle1CSS = css`
  ${h3CSS}
  font-size: 1.5rem;
  line-height: 1.1;
  margin: 0.25rem 0 0 0.2rem;
  font-family: var(--gt-font-family-subtitle);
`;

const subtitle2CSS = css`
  ${h3CSS}
  font-weight: 100;
  color: var(--gt-color-text-secondary);
  font-family: var(--gt-font-family-subtitle);
`;

const body1CSS = css`
  line-height: 1.6;
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: 1.3rem;
`;

const body2CSS = css`
  line-height: 1.6;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 1.3rem;
`;

const buttonCSS = css`
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 500;
  font-family: var(--gt-font-family-regular);
`;

const VARIANT_STYLES = {
  [H1]: h1CSS,
  [H2]: h2CSS,
  [H3]: h3CSS,
  [H4]: h4CSS,
  [H5]: h5CSS,
  [H6]: h6CSS,
  [SUBTITLE_1]: subtitle1CSS,
  [SUBTITLE_2]: subtitle2CSS,
  [BODY_1]: body1CSS,
  [BODY_2]: body2CSS,
  [BUTTON]: buttonCSS,
};

const VARIANT_COMPONENT = {
  [H1]: H1,
  [H2]: H2,
  [H3]: H3,
  [H4]: H4,
  [H5]: H5,
  [H6]: H6,
  [SUBTITLE_1]: P,
  [SUBTITLE_2]: P,
  [BODY_1]: P,
  [BODY_2]: P,
  [BUTTON]: SPAN,
};

const getCSS = (variant) => VARIANT_STYLES[variant] || VARIANT_STYLES[BODY_1];

const getComponent = (variant) => VARIANT_COMPONENT[variant] || P;

export function Typography({ children, className, component, variant, ...props }) {
  const Component = component || getComponent(variant);
  const styles = getCSS(variant);

  return (
    <Component css={styles} className={className} {...props}>
      {children}
    </Component>
  );
}

Typography.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.elementType]),
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
  ]),
};

Typography.defaultProps = {
  children: null,
  className: null,
  component: null,
  variant: null,
};

export default Typography;
