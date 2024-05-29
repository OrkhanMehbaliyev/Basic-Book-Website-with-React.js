import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import CartItem from "./CartItem";
import { getFromLS } from "../utils/helperFunctions";
import { CART_LSKEY } from "../utils/enums";

export default function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [cartItems, setCartItems] = useState(null);

  const getData = () => {
    setCartItems(getFromLS(CART_LSKEY));
  };

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={() => {
          onOpen();
          getData();
        }}
      >
        <HStack spacing={4}>
          <Box>Cart</Box>
          <BsCartFill />
        </HStack>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>

          <DrawerBody>
            <VStack spacing={5}>
              {cartItems &&
                cartItems.map((item) => (
                  <CartItem
                    key={item?.body?.id + "draw"}
                    data={item}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                  />
                ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
