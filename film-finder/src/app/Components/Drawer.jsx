"use client";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Avatar,
  AvatarBadge,
  HStack,
  Stack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, UnlockIcon, EmailIcon } from "@chakra-ui/icons";
//import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

//import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
/*
const getUserInfo = async(e) => {
  try {
      const res = await fetch(`http://localhost:3000/api/userinfo?request=${e}`, {cache: "no-store"});
      if (!res.ok)
      {   
          throw new Error("Could not get user");
      }

      const convert = JSON.parse(JSON.stringify(await res.json()));
      const {id} = convert;
      return await convert;
  } catch (err) {
      console.log("Error:", err);
  }
}
*/

const NavDrawer = () =>  {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = React.useRef();
  const friendLink = React.useRef();
  const [isHovering, setIsHovering] = useState(false);

  const {data: session} = useSession();
  const [error, setError] = useState("");

  //CheckLogin();

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
            {!session?(<DrawerHeader>Not Logged In</DrawerHeader>):(<DrawerHeader>Logged In As</DrawerHeader>)}
            <HStack margin={3}>
            {!session?(<Avatar size="lg"><AvatarBadge boxSize="1.25em" bg="green.500" /></Avatar>):(<Avatar size="lg"><AvatarBadge boxSize="1.25em" bg="green.500" /></Avatar>)}
              <Stack>
              {!session?(<Text fontSize="2xl" align={"center"}><Link href="profile">Guest</Link></Text>):(<Text fontSize="md" align={"center"}><Link href="profile">{session.user.email}</Link></Text>)}
              </Stack>
            </HStack>
            <Box marginTop={3} marginLeft={3} marginRight={3}>
            {!session?(<Text fontFamily={"sans-serif"} fontSize="xl"></Text>):(<Text fontFamily={"sans-serif"} fontSize="xl"><Link href="view-my-movies">My movies</Link></Text>)}
            </Box>
            <Box marginTop={3} marginLeft={3} marginRight={3}>
            {!session?(<Text fontFamily={"sans-serif"} fontSize="xl"></Text>):(<Text fontFamily={"sans-serif"} fontSize="xl"><Link href="blender">Blends</Link></Text>)}
            </Box>
            <Box marginTop={3} marginLeft={3} marginRight={3}>
            {!session?(<Text fontFamily={"sans-serif"} fontSize="xl"></Text>):(<Text fontFamily={"sans-serif"} fontSize="xl"><Link href="view-friends">View Friends</Link></Text>)}
            </Box>
          </DrawerBody>
          <DrawerFooter>
          {!session? 
          (<HStack spacing={10}>
            <Button leftIcon={<EmailIcon />}w={100} size="lg" colorScheme="blue"> <Link href="signup">Sign Up </Link></Button>
            <Button leftIcon={<UnlockIcon />}w={100} size="lg" colorScheme="blue" marginRight={3}> <Link href="login">Log In </Link></Button>
          </HStack>):
          (<Button colorScheme='blue' onClick={() => {signOut();}}> Log Out</Button>)}
            {/* Make this button navigate back to the log in page */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default NavDrawer;