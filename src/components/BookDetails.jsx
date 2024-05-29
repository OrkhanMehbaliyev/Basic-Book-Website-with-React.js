import { useParams } from "react-router-dom";
import { Box, Heading, Image, Text, Flex, Spinner } from "@chakra-ui/react";
import useBookDetails from "../hooks/useBookDetail";
import { useState } from "react";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { foundBook, error, loading } = useBookDetails(id);

  useEffect(() => {
    setBook(foundBook);
  }, [foundBook]);

  return (
    <Flex
      direction={"column"}
      align={"center"}
      gap={4}
      p={5}
      mt={"50px"}
      h={"100%"}
      w={"100%"}
    >
      {book && (
        <>
          <Box>
            <Image src={book?.thumbnail} width={"150px"} height={"200px"} />
          </Box>
          <Box textAlign={"center"}>
            <Heading size={"xl"} mb={4}>
              {book?.title}
            </Heading>
            <Heading size={"md"}>{book?.authors}</Heading>
          </Box>
          <Box width="90%" textAlign={"center"}>
            <Text
              dangerouslySetInnerHTML={{ __html: book?.description }}
              mb={"50px"}
            />
          </Box>
          <Box>
            <Heading>{book?.price}</Heading>
          </Box>
        </>
      )}
      {loading && (
        <Flex alignItems={"center"} justifyContent={"center"} h="100%">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
      {error && <Box>Could not find</Box>}
    </Flex>
  );
}
