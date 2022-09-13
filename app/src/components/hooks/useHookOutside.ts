import React, { useEffect } from 'react';

export default (el: React.MutableRefObject<HTMLDivElement>, fn: () => void) => {
  useEffect(() => {
    const handleEvent = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!el.current.contains(target) && !target.matches('.btn-delete ')) {
        fn();
      }
    };
    window.addEventListener('click', handleEvent);

    return () => {
      window.removeEventListener('click', handleEvent);
    };
  });
};
