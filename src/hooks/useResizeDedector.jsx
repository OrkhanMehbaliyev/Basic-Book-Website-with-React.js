import { useEffect, useState } from "react";
import { throttle } from "../utils/helperFunctions";
import { BREAKPOINTS } from "../utils/enums";

export default function useResizeDedector() {
  const [size, setSize] = useState(null);

  const onResize = throttle(() => {
    const screenSize = window.innerWidth;
    if (screenSize < 480) setSize(BREAKPOINTS.BASE);
    else if (screenSize >= 480 && screenSize < 768) setSize(BREAKPOINTS.SM);
    else if (screenSize >= 768 && screenSize < 992) setSize(BREAKPOINTS.MD);
    else if (screenSize >= 992 && screenSize < 1280) setSize(BREAKPOINTS.LG);
    else if (screenSize >= 1280 && screenSize < 1536) setSize(BREAKPOINTS.XL);
    else setSize(BREAKPOINTS.XXL);
  }, 100);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
  }, []);

  return size;
}
