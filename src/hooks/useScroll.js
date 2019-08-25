import { useState, useEffect } from 'react';

function useScroll() {
  const [position, setPosition] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', () => setPosition(window.scrollY));
    return () => window.removeEventListener('scroll', () => setPosition(0));
  }, [window.scrollY]);

  return position;
}

export default useScroll;
