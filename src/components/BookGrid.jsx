import { Box, Flex, Grid, Heading, Spinner } from "@chakra-ui/react";
import Search from "./Search";
import BookItem from "./BookItem";
import BookContext from "../utils/context";
import { useContext, useEffect, useRef, useState } from "react";

export default function BookGrid() {
  const { displayedBooks, loading, notFound } = useContext(BookContext);

  return (
    <>
      {displayedBooks.length > 0 && (
        <>
          <Grid
            p={5}
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={6}
          >
            {displayedBooks.map((book, idx) => (
              <BookItem key={idx} book={book} />
            ))}
          </Grid>
          <Box h={"30px"}></Box>
        </>
      )}
      {loading && (
        <Flex alignItems={"center"} justifyContent={"center"} h="30%">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}

      {notFound && (
        <Flex alignItems={"center"} justifyContent={"center"} h="30%">
          <Heading>Not found</Heading>
        </Flex>
      )}
    </>
  );
}
