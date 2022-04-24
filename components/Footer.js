import { css } from '@emotion/react';

const footer = css`
  text-align: center;
  line-height: 40px;
  margin-top: 20px;
`;

export default function Footer() {
  return (
    <footer css={footer}>
      © 2022&nbsp;
      <a
        href="https://gitee.com/2010thxl/react-ssr-next/tree/demo-movie"
        target="_blank"
      >
        Duyb
      </a>
    </footer>
  );
}
