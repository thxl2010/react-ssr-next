import { css } from '@emotion/react';

const main = css`
  min-height: calc(100vh - 52px - 52px - 60px);
`;

export default function Main({ children }) {
  return <main css={main}>{children}</main>;
}
