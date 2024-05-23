import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function BookItem({ book }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(book.id);
  };

  return (
    <Card
      maxW="sm"
      _hover={{ transform: "scale(1.1)", boxShadow: "lg", transition: "0.2s" }}
      onClick={handleCardClick}
    >
      <CardBody>
        <Image src={book?.thumbnail} borderRadius="lg" m={"auto"} />
        <Stack mt="6" spacing="3">
          <Heading size="md" noOfLines={3}>
            {book?.title}
          </Heading>
          <Text noOfLines={5}>{book?.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Text color="blue.600" fontSize="2xl">
          {book?.price}
        </Text>
      </CardFooter>
    </Card>
  );
}
