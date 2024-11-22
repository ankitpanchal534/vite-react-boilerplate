import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ColorfulSvgProps {
  svgUrl: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export default function ColorfulSvg({
  svgUrl,
  className,
  style,
  color = 'currentColor',
}: ColorfulSvgProps) {
  return (
    <div
      className={twMerge('inline-block h-5 w-5 bg-current', className)}
      style={{
        ...style,
        backgroundColor: color,
        WebkitMaskImage: `url(${svgUrl})`,
        maskImage: `url(${svgUrl})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  );
}
