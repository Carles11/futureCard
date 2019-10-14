import { useState, useEffect } from 'react';

function useSize() {
  const { clientWidth: w, clientHeight: h } = document.body;
  const [size, setSize] = useState({ w, h });

  useEffect(() => {
    const { clientWidth: wUpdated, clientHeight: hUpdated } = document.body;
    window.addEventListener('resize', () => setSize({ w: wUpdated, h: hUpdated }));

    return () => window.removeEventListener('resize', () => setSize({}));
  }, [document.body.clientWidth, document.body.clientHeight]);

  return size;
}

export default useSize;
