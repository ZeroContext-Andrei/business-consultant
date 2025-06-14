import { useEffect, useRef, useState } from 'react';

interface EyeFollowerProps {
  size?: number; // width of the eye in px (height is size / 2)
  className?: string;
}

/**
 * EyeFollower – an SVG eye whose pupil subtly follows the user's cursor.
 */
const EyeFollower = ({ size = 80, className = '' }: EyeFollowerProps) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.hypot(dx, dy);

      // Maximum pupil travel (pixels)
      const max = size * 0.1; // 10% of width
      if (dist === 0) return setOffset({ x: 0, y: 0 });
      const ratio = Math.min(max, dist) / dist;
      setOffset({ x: dx * ratio, y: dy * ratio });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  const scleraWidth = size;
  const scleraHeight = size / 2;
  const pupilRadius = size * 0.1;

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ width: scleraWidth, height: scleraHeight }}
    >
      <svg
        width={scleraWidth}
        height={scleraHeight}
        viewBox={`0 0 ${scleraWidth} ${scleraHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sclera */}
        <ellipse
          cx={scleraWidth / 2}
          cy={scleraHeight / 2}
          rx={scleraWidth / 2}
          ry={scleraHeight / 2}
          fill="#ffffff"
          stroke="#666"
          strokeWidth="2"
        />

        {/* Pupil */}
        <circle
          cx={scleraWidth / 2 + offset.x}
          cy={scleraHeight / 2 + offset.y}
          r={pupilRadius}
          fill="#000000"
        />
      </svg>
    </div>
  );
};

export default EyeFollower; 