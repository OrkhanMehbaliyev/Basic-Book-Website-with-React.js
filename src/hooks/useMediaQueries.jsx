import useMediaQuery from "./useMediaQuery";

export default function useMediaQueries() {
  const screenSize = window.innerWidth;

  // let base = false;
  // let sm = false;
  // let md = false;
  // let lg = false;
  // let xl = false;
  // let xxl = false;

  // if (screenSize < 480) base = useMediaQuery("(min-width : 0px)");
  // else if (screenSize >= 480 && screenSize < 768)
  //   sm = useMediaQuery("(min-width : 30em)");
  // else if (screenSize >= 768 && screenSize < 992)
  //   md = useMediaQuery("(min-width: 48em)");
  // else if (screenSize >= 992 && screenSize < 1280)
  //   lg = useMediaQuery("(min-width: 62em)");
  // else if (screenSize >= 1280 && screenSize < 1536)
  //   xl = useMediaQuery("(min-width: 80em)");
  // else xxl = useMediaQuery("(min-width: 96em)");
  const base = useMediaQuery("(min-width : 0px)");
  const sm = useMediaQuery("(min-width : 30em)");
  const md = useMediaQuery("(min-width: 48em)");
  const lg = useMediaQuery("(min-width: 62em)");
  const xl = useMediaQuery("(min-width: 80em)");
  const xxl = useMediaQuery("(min-width: 96em)");

  return { base, sm, md, lg, xl, xxl };
}
