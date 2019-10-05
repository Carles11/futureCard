import { useEffect } from "react";

function useScroll(subscribe = false) {
  useEffect(() => {
    function setPosition(value) {
      return value;
    }

    if (subscribe) {
      window.addEventListener("scroll", () => setPosition(window.scrollY));
    }

    return () => window.removeEventListener("scroll", () => setPosition(null));
  }, [window.scrollY]);
}

export default useScroll;
