import useMediaQuery from "./useMediaQuery";

export default function useMediaQueries() {
  const base = useMediaQuery("(min-width : 0px)");
  const sm = useMediaQuery("(min-width : 30em)");
  const md = useMediaQuery("(min-width: 48em)");
  const lg = useMediaQuery("(min-width: 62em)");
  const xl = useMediaQuery("(min-width: 80em)");
  const xxl = useMediaQuery("(min-width: 96em)");

  return { base, sm, md, lg, xl, xxl };
}
