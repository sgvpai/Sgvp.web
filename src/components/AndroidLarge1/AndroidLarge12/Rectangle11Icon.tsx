import { memo, SVGProps } from 'react';

const Rectangle11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 343 1464' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 26C0 11.6406 11.6406 0 26 0H317C331.359 0 343 11.6406 343 26V1438C343 1452.36 331.359 1464 317 1464H26C11.6406 1464 0 1452.36 0 1438V26Z'
      fill='url(#paint0_linear_146_9)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_146_9'
        x1={171.5}
        y1={37.3177}
        x2={171.5}
        y2={1501.32}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#092635' />
        <stop offset={0.28125} stopColor='#1B4242' stopOpacity={0.76} />
        <stop offset={0.546875} stopColor='#5C8374' stopOpacity={0.55} />
        <stop offset={0.864583} stopColor='#D9D9D9' />
        <stop offset={0.994792} stopColor='#D9D9D9' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Rectangle11Icon);
export { Memo as Rectangle11Icon };
