import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => setSize({
      w: window.innerWidth,
      h: window.innerHeight,
    });

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return size;
}

export default useWindowSize;
