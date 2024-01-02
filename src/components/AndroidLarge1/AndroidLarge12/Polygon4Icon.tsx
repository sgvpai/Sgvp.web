//src\components\AndroidLarge1\AndroidLarge12\Polygon1Icon.tsx
import React, { memo, SVGProps } from 'react';

interface Polygon4IconProps extends SVGProps<SVGSVGElement> {
  targetPosition: number;
}

const Polygon4Icon = ({ targetPosition, ...props }: Polygon4IconProps) => {
  const handleButtonClick = () => {
    // Scroll down by the specified number of pixels
    window.scrollBy({
      top: -8800,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <svg preserveAspectRatio='none' viewBox='0 0 82 74' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}
onClick={handleButtonClick}
      style={{ cursor: 'pointer' }}>
    <path
      d='M17.0212 45.8685C9.55437 41.978 5.82094 40.0328 5.82094 37C5.82094 33.9672 9.55437 32.022 17.0212 28.1315L46.8793 12.5748C53.4172 9.16837 56.6862 7.46517 59.0931 8.92512C61.5 10.3851 61.5 14.0711 61.5 21.4432V52.5568C61.5 59.9289 61.5 63.6149 59.0931 65.0749C56.6862 66.5348 53.4172 64.8316 46.8793 61.4252L17.0212 45.8685Z'
      fill='url(#paint0_linear_146_8)'
    />
    <defs>
      <linearGradient id='paint0_linear_146_8' x1={0} y1={37} x2={82} y2={37} gradientUnits='userSpaceOnUse'>
        <stop offset={0.114583} stopColor='#435163' />
        <stop offset={1} stopColor='#F4EBE3' />
      </linearGradient>
    </defs>
  </svg>
  );
};

const Memo = memo(Polygon4Icon);
export { Memo as Polygon4Icon };
