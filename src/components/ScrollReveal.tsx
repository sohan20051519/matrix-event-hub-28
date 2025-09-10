import { ReactNode, forwardRef } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'up-sm' | 'up-lg';
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({
    children,
    className,
    delay = 0,
    variant = 'up',
    threshold = 0.1,
    rootMargin = '0px 0px -10px 0px',
    triggerOnce = true,
  }, forwardedRef) => {
    const { elementRef, isVisible } = useScrollReveal({
      threshold,
      rootMargin,
      triggerOnce,
    });

    const animationClass = {
      'up': 'animate-reveal-up',
      'up-sm': 'animate-reveal-up-sm',
      'up-lg': 'animate-reveal-up-lg',
    }[variant];

    return (
      <div
        ref={(element) => {
          if (element) {
            (elementRef as any).current = element;
            if (typeof forwardedRef === 'function') {
              forwardedRef(element);
            } else if (forwardedRef) {
              forwardedRef.current = element;
            }
          }
        }}
        className={cn(
          'opacity-0 translate-y-12',
          isVisible && animationClass,
          className
        )}
        style={{
          animationDelay: delay > 0 ? `${delay}ms` : '0ms',
        }}
      >
        {children}
      </div>
    );
  }
);

ScrollReveal.displayName = 'ScrollReveal';

export default ScrollReveal;