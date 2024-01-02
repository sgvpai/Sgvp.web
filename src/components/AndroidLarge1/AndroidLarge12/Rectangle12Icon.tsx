import { memo, SVGProps } from 'react';

const Rectangle12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 293 1324' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 26C0 11.6406 11.6406 0 26 0H267C281.359 0 293 11.6406 293 26V1298C293 1312.36 281.359 1324 267 1324H26C11.6406 1324 0 1312.36 0 1298V26Z'
      fill='#D9D9D9'
    />
  </svg>
);

const Memo = memo(Rectangle12Icon);
export { Memo as Rectangle12Icon };
