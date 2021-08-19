import { css } from '@emotion/react';

export const sectionTitle = css`
  text-align: center;
  font-size: 2rem;
`;

// Bootstrap のブレイクポイント
// 暫定的にこちらを採用中
export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

// Tailwind CSS のブレイクポイント
export const breakpointsTw = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1200,
};
