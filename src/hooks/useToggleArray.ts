import { useState } from "react";

/**
 * Custom hook for managing an array of open/toggle states
 * Eliminates duplicate toggle logic between FAQ and Resources sections
 * 
 * @param initialOpen - Array of initially open indices (default: empty array)
 * @returns Object with openItems array and toggle function
 */
export function useToggleArray(initialOpen: number[] = []) {
  const [openItems, setOpenItems] = useState<number[]>(initialOpen);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return { openItems, toggleItem };
}
