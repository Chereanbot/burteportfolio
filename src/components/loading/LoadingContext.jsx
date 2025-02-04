import { createContext, useContext, useState, useCallback } from "react";

const LoadingContext = createContext({
  triggerTransition: () => {},
  isTransitioning: false,
  direction: "down",
});

export const LoadingProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("down");
  const [lastTriggerTime, setLastTriggerTime] = useState(0);

  const triggerTransition = useCallback((newDirection = "down") => {
    const now = Date.now();
    if (!isTransitioning && now - lastTriggerTime > 2000) {
      setLastTriggerTime(now);
      setDirection(newDirection);
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1500);
    }
  }, [isTransitioning, lastTriggerTime]);

  return (
    <LoadingContext.Provider value={{ triggerTransition, isTransitioning, direction }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext); 