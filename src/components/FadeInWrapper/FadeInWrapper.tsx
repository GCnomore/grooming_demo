import React, { useState, useEffect, ReactNode } from "react";

interface FadeInWrapperProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({
  children,
  duration = 400,
  delay = 50,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className="flex h-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
