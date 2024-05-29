import { Flex, Grid, Spinner, Box } from "@chakra-ui/react";
import Search from "./Search";
import BookContext from "../utils/context";
import { useCallback, useEffect, useRef, useState } from "react";
import BookGrid from "./BookGrid";
import useBookSearch from "../hooks/useBookSearch";
import { throttle } from "../utils/helperFunctions";

export default function BooksContainer() {
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [input, setInput] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const divRef = useRef(null);
  const { searchedBooks, loading, notFound } = useBookSearch(
    input,
    startIndex,
    24
  );

  //Trottling for infinite scroll
  const throttledFetchData = useCallback(throttle(setStartIndex, 1500), []);

  useEffect(() => {
    setStartIndex(0);
    setDisplayedBooks([]);
  }, [input]);

  useEffect(() => {
    setDisplayedBooks((prev) => [...prev, ...searchedBooks]);
  }, [searchedBooks]);

  useEffect(() => {
    const container = divRef.current;
    if (container) container.addEventListener("scroll", handleScroll);
  }, [startIndex]);

  function handleScroll() {
    const container = divRef.current;

    if (
      window.innerHeight + container.scrollTop + 1 >=
      container.scrollHeight
    ) {
      throttledFetchData((prev) => prev + 24);
    }
  }

  const data = {
    input,
    setInput,
    displayedBooks,
    setDisplayedBooks,
    loading,
    notFound,
  };

  return (
    <BookContext.Provider value={data}>
      <Box
        ref={divRef}
        h={"100%"}
        width={"100%"}
        overflowY={"auto"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Search />
        <BookGrid />
      </Box>
    </BookContext.Provider>
  );
}
