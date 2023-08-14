import { css } from '@emotion/react';

const zIndexValues = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

export const zIndex = css`
  --gt-z-index-mobile-stepper: ${zIndexValues.mobileStepper};
  --gt-z-index-speed-dial: ${zIndexValues.speedDial};
  --gt-z-index-app-bar: ${zIndexValues.appBar};
  --gt-z-index-drawer: ${zIndexValues.drawer};
  --gt-z-index-modal: ${zIndexValues.modal};
  --gt-z-index-snackbar: ${zIndexValues.snackbar};
  --gt-z-index-tooltip: ${zIndexValues.tooltip};
`;

export default zIndex;
