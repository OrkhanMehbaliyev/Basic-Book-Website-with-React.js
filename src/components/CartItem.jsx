import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import { setItem } from "localforage";
import { useNavigate } from "react-router-dom";
import {
  CartModel,
  addToLS,
  deleteFromLS,
  getFromLS,
  updateInLS,
} from "../utils/helperFunctions";
import { CART_LSKEY } from "../utils/enums";
import { useEffect, useState } from "react";

export default function CartItem({ data, cartItems, setCartItems }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(data?.count);

  const handleCardClick = () => {
    navigate("books/" + data?.body?.id);
  };

  const onDeleteClick = (e) => {
    e.stopPropagation();
    deleteFromLS(CART_LSKEY, data);
    setCartItems(cartItems.filter((x) => x.body.id != data.body.id));
  };

  const minusBtnClick = (e) => {
    e.stopPropagation();
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const plusBtnClick = (e) => {
    e.stopPropagation();
    setCount(count + 1);
  };

  useEffect(() => {
    updateInLS(CART_LSKEY, new CartModel(data?.body, count));
    if (count == 0) {
      deleteFromLS(CART_LSKEY, data);
      setCartItems(cartItems.filter((x) => x.body.id != data.body.id));
    }
  }, [count]);

  return (
    <Card maxW="md" onClick={handleCardClick}>
      <CardBody>
        <Image src={data?.body?.thumbnail} borderRadius="lg" m={"auto"} />
        <Stack mt="6" spacing="3">
          <Heading size="md" noOfLines={3}>
            {data?.body?.title}
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Center
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
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
          <Button colorScheme="red" mt={4} onClick={onDeleteClick}>
            Delete
          </Button>
        </Center>
      </CardFooter>
    </Card>
  );
}
