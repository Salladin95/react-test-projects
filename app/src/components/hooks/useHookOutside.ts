import React, { useEffect } from 'react';

export default (el: React.MutableRefObject<HTMLDivElement>, fn: () => void) => {
  useEffect(() => {
    const handleEvent = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!el.current.contains(target) && !target.matches('.btn-delete')) {
        fn();
      }
    };
    window.addEventListener('mousedown', handleEvent);
    window.addEventListener('touchstart', handleEvent);

    return () => {
      window.removeEventListener('mousedown', handleEvent);
      window.removeEventListener('touchstart', handleEvent);
    };
  }, [el, fn]);
};
