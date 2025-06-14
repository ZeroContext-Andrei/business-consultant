import React from 'react';

interface LogoIconProps {
  size?: number; // width & height in px
  className?: string;
}

const LogoIcon = ({ size = 24, className = '' }: LogoIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 250 250"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    {/* Left-facing quarter circle inside a square */}
    <path d="M 200 200 H 50 A 150 150 0 0 1 200 50 V 200 Z" fill="none" stroke="white" strokeWidth="20" />
  </svg>
);

export default LogoIcon; 