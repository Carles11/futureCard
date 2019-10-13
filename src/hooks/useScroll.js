import { useEffect, useState } from "react";

function useScrollPosition() {
  const [position, setPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return position;
}

// function useScroll(subscribe = false) {
//   useEffect(() => {
//     function setPosition(value) {
//       return value;
//     }

//     if (subscribe) {
//       window.addEventListener("scroll", () => setPosition(window.scrollY));
//     }

//     return () => window.removeEventListener("scroll", () => setPosition(null));
//   }, [window.scrollY]);
// }

export default useScrollPosition;
