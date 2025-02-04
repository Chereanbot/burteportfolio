import { useEffect, useRef } from "react";
import { useLoading } from "./LoadingContext";

const SectionTransition = ({ children, direction = "down", threshold = 0.3 }) => {
  const ref = useRef(null);
  const { triggerTransition } = useLoading();
  const hasTriggeredRef = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          triggerTransition(direction);
        } else if (!entry.isIntersecting) {
          hasTriggeredRef.current = false;
        }
      },
      {
        threshold,
        rootMargin: "-100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [direction, threshold, triggerTransition]);

  return (
    <div ref={ref} className="min-h-[100px]">
      {children}
    </div>
  );
};

export default SectionTransition; 