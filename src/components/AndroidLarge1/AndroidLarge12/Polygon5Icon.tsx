//src\components\AndroidLarge1\AndroidLarge12\Polygon1Icon.tsx
import React, { memo, SVGProps } from 'react';

interface Polygon5IconProps extends SVGProps<SVGSVGElement> {
  targetPosition: number;
}

const Polygon5Icon = ({ targetPosition, ...props }: Polygon5IconProps) => {
  const handleButtonClick = () => {
    // Scroll down by the specified number of pixels
    window.scrollBy({
      top: -2380,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <svg preserveAspectRatio='none' viewBox='0 0 62 65' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}
 onClick={handleButtonClick}
      style={{ cursor: 'pointer' }}>
    <path
      d='M44.4788 23.6745C51.9457 27.5649 55.6791 29.5101 55.6791 32.5429C55.6791 35.5758 51.9457 37.521 44.4788 41.4114L14.6207 56.9682C8.08279 60.3746 4.81383 62.0778 2.40693 60.6178C3.05176e-05 59.1579 3.05176e-05 55.4718 3.05176e-05 48.0997L3.05176e-05 16.9861C3.05176e-05 9.61405 3.05176e-05 5.92801 2.40693 4.46806C4.81383 3.0081 8.08279 4.71131 14.6207 8.11771L44.4788 23.6745Z'
      fill='url(#paint0_linear_146_11)'
    />
    <defs>
      <linearGradient id='paint0_linear_146_11' x1={71} y1={-13} x2={-11} y2={-13} gradientUnits='userSpaceOnUse'>
        <stop offset={0.114583} stopColor='#435163' />
        <stop offset={1} stopColor='#F4EBE3' />
      </linearGradient>
    </defs>
  </svg>
  );
};

const Memo = memo(Polygon5Icon);
export { Memo as Polygon5Icon };
