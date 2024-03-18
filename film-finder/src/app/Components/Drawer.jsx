"use client";
import * as React from "react";
import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Input,
  useDisclosure,
  Avatar,
  AvatarBadge,
  HStack,
  Stack,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  pseudoSelectors,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
//import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

export default function NavDrawer() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = React.useRef();
  const friendLink = React.useRef();
  const [isHovering, setIsHovering] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen} positi>
        Open
      </Button> */}
      <IconButton
        float={"right"}
        marginRight={5}
        marginTop={5}
        textAlign={"right"}
        onClick={onToggle}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        }
        variant={"ghost"}
        aria-label={"Toggle Navigation"}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <DrawerCloseButton />
            <DrawerHeader>Welcome Dastu</DrawerHeader>
            <HStack margin={3}>
              <Avatar size="lg">
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
              <Stack>
                <Text fontSize="2xl" align={"center"}>
                  <Link href="profile">@Das_two</Link>
                </Text>
              </Stack>
            </HStack>
            <Input ref={friendLink} id="username" placeholder="+ Add friends" />
            {/* We need to make it so when a link is entered a new freind is populated in the friends list */}
            <Box marginTop={8} marginLeft={1} marginRight={1}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize={"xl"}>
                        Friends
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Link href="profile">Nabeera</Link>
                    </Box>
                    <Box>
                      <Link href="profile">Xander</Link>
                    </Box>
                    <Box>
                      <Link href="profile">Alex</Link>
                    </Box>
                    <Box>
                      <Link href="profile">Maxx</Link>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box marginTop={3} marginLeft={3} marginRight={3}>
              <Text fontFamily={"sans-serif"} fontSize="xl">
                {" "}
                <Link href="view-my-movies">My movies</Link>
              </Text>
            </Box>
            <Box marginTop={3} marginLeft={3} marginRight={3}>
              <Text fontFamily={"sans-serif"} fontSize="xl">
                <Link href="blender">Blends</Link>
              </Text>
            </Box>
            {/* <Button
              marginTop={3}
              width="100%"
              rightIcon={<ChevronDownIcon />}
              placeContent={"baseline"}
            >
              <Text fontFamily={"sans-serif"} fontSize="xl">
                {" "}
                Blends
              </Text>
            </Button> */}
          </DrawerBody>

          <DrawerFooter>
            <Stack>
              <Link href="login"> Logout </Link>
              <Link href="signup"> Signup </Link>
            </Stack>
            {/* Make this button navigate back to the log in page */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
