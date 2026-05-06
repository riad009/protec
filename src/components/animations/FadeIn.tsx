'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : direction === 'up' ? 'translateY(20px)' : direction === 'down' ? 'translateY(-20px)' : direction === 'left' ? 'translateX(20px)' : direction === 'right' ? 'translateX(-20px)' : 'none',
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
