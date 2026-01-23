import { useState } from 'react';

/**
 * Custom hook to manage accordion state.
 * @param keys Array of section keys
 * @param mode 'single' for one open in total, 'per-section' for one open per section
 */
export function useAccordionState<T extends string>(
  keys: T[],
  mode: 'single' | 'per-section' = 'per-section'
) {
  // For 'per-section', each section can have one open item (index or null)
  // For 'single', only one item in one section can be open at a time
  const [openItems, setOpenItems] = useState<Record<T, number | null>>(() => {
    const initial: Record<T, number | null> = {} as Record<T, number | null>;
    keys.forEach(key => { initial[key] = null; });
    return initial;
  });

  const toggleItem = (section: T, index: number) => {
    setOpenItems(prev => {
      if (mode === 'per-section') {
        return {
          ...prev,
          [section]: prev[section] === index ? null : index,
        };
      } else {
        // Only one open in total
        const newState: Record<T, number | null> = {} as Record<T, number | null>;
        keys.forEach(key => { newState[key] = null; });
        newState[section] = prev[section] === index ? null : index;
        return newState;
      }
    });
  };

  const closeAll = () => {
    setOpenItems(() => {
      const closed: Record<T, number | null> = {} as Record<T, number | null>;
      keys.forEach(key => { closed[key] = null; });
      return closed;
    });
  };

  return { openItems, toggleItem, closeAll };
}
