import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
} from '@floating-ui/react';
import { css } from '@emotion/react';
import { InfoButton } from '@components/atoms/InfoButton';
import { Surface } from '@components/atoms/Surface';

export function InfoPopup({ children, label }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  return (
    <>
      <InfoButton label={label} ref={refs.setReference} {...getReferenceProps()} />
      {isOpen && (
        <FloatingFocusManager context={context}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            css={css`
              z-index: var(--gt-z-index-tooltip);
            `}
          >
            <Surface
              css={css`
                display: inline-block;
                max-width: 30rem;
              `}
            >
              {children}
            </Surface>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}

InfoPopup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

InfoPopup.defaultProps = {
  label: undefined,
  children: null,
};

export default InfoPopup;
