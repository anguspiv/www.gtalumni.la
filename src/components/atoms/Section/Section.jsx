import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { rem } from 'polished';
import { isNumber, isString } from 'radash';
import { Container } from '@components/atoms/Container';

export function Section({ align, as, className, children, maxWidth, background }) {
  const Component = as || 'section';

  let bgColor = 'var(--gt-color-background-primary)';
  let color = 'var(--gt-color-text-primary)';

  switch (background) {
    case 'secondary':
      bgColor = 'var(--gt-color-background-secondary)';
      color = 'var(--gt-color-text-primary)';
      break;
    case 'alt':
      bgColor = 'var(--gt-color-background-alt)';
      color = 'var(--gt-color-text-alt)';
      break;
    case 'alt-secondary':
      bgColor = 'var(--gt-color-background-alt-secondary)';
      color = 'var(--gt-color-text-alt)';
      break;
    default:
      bgColor = 'var(--gt-color-background-primary)';
      color = 'var(--gt-color-text-primary)';
  }

  let maxWidthValue = '';

  if (maxWidth && isNumber(maxWidth)) {
    maxWidthValue = rem(maxWidth);
  }

  if (maxWidth && isString(maxWidth)) {
    maxWidthValue = maxWidth;
  }

  return (
    <Component
      data-testid="section"
      className={className}
      css={css`
        background-color: ${bgColor};
        color: ${color};
        text-align: ${align};
        padding-top: 1rem;
        padding-bottom: 2rem;
      `}
    >
      <Container
        css={css`
          ${maxWidthValue && `max-width: ${maxWidthValue};`}
        `}
      >
        {children}
      </Container>
    </Component>
  );
}

Section.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.oneOf(['primary', 'secondary', 'alt', 'alt-secondary']),
};

Section.defaultProps = {
  as: 'section',
  align: 'left',
  children: null,
  className: '',
  maxWidth: null,
  background: 'primary',
};

export default Section;
