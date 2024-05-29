import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartModel, addToLS } from "../utils/helperFunctions";
import { CART_LSKEY } from "../utils/enums";

export default function BookItem({ book }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const handleCardClick = () => {
    navigate(book.id);
  };

  const onAddBtnClick = (e) => {
    e.stopPropagation();
    if (count) addToLS(CART_LSKEY, new CartModel(book, count));
  };

  const minusBtnClick = (e) => {
    e.stopPropagation();
    if (count > 0) setCount(count - 1);
  };

  const plusBtnClick = (e) => {
    e.stopPropagation();
    setCount(count + 1);
  };

  const onChangeHandler = (e) => {
    setCount(e.target.value);
  };

  return (
    <Card
      maxW="md"
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
        <Flex w={"100%"} flexDirection={"column"} justify={"space-between"}>
          <Box>
            <HStack>
              <Button onClick={minusBtnClick}>-</Button>
              <Input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <Button onClick={plusBtnClick}>+</Button>
            </HStack>
          </Box>
          <Button colorScheme="blue" mt={4} onClick={onAddBtnClick}>
            Add to cart
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}
