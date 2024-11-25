// import { useWindowSize } from "usehooks-ts";

import { useEffect, useState } from "react";

export function useDeviceType() {
  //   const { width } = useWindowSize();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = width <= 640;
  const isTab = width > 640 && width <= 1024;
  const isDeskTop = width > 1024;
  return { isMobile, isTab, isDeskTop };
}
