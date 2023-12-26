import React, { useCallback } from "react";
import { useDebounce } from "../../hooks"; // Import the debounce utility function

interface ButtonProps {
  onClick: () => void;
  debounceTime: number;
  children: React.ReactNode;
  className?: string;
}

const DebouncedButton: React.FC<ButtonProps> = ({
  onClick,
  debounceTime,
  children,
  className,
}) => {
  const debouncedClick = useDebounce(onClick, debounceTime);

  const handleClick = useCallback(() => {
    debouncedClick();
  }, [debouncedClick]);

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default DebouncedButton;
