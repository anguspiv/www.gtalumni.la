import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { rem } from 'polished';
import { isNumber, isString } from 'radash';
import { Container } from '@components/atoms/Container';

export function Section({ align, className, children, maxWidth, variant }) {
  let bgColor = 'var(--gt-color-background-primary)';

  switch (variant) {
    case 'secondary':
      bgColor = 'var(--gt-color-background-secondary)';
      break;
    case 'alt':
      bgColor = 'var(--gt-color-background-alt)';
      break;
    case 'alt-secondary':
      bgColor = 'var(--gt-color-background-alt-secondary)';
      break;
    default:
      bgColor = 'var(--gt-color-background-primary)';
  }

  let maxWidthValue = '';

  if (maxWidth && isNumber(maxWidth)) {
    maxWidthValue = rem(maxWidth);
  }

  if (maxWidth && isString(maxWidth)) {
    maxWidthValue = maxWidth;
  }

  return (
    <section
      data-testid="section"
      className={className}
      css={css`
        background-color: ${bgColor};
        text-align: ${align};
      `}
    >
      <Container
        css={css`
          ${maxWidthValue && `max-width: ${maxWidthValue};`}
        `}
      >
        {children}
      </Container>
    </section>
  );
}

Section.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node,
  className: PropTypes.string,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'alt', 'alt-secondary']),
};

Section.defaultProps = {
  align: 'left',
  children: null,
  className: '',
  maxWidth: null,
  variant: 'primary',
};

export default Section;
