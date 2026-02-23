import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect when a section is in viewport
 * Uses Intersection Observer API for performance
 */
export function useSectionInView(threshold: number = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visible to true when element enters viewport
        if (entry.isIntersecting) {
          setVisible(true);
          // Optionally, stop observing after first appearance
          // observer.disconnect();
        }
      },
      {
        threshold, // Trigger when at least 10% of element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully in view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, visible] as const;
}