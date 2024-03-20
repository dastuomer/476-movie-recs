'use client';
import * as React from "react";
import Logo from "../components/logo.js";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Button,
  IconButton,
  Input,
  useDisclosure,
  Avatar,
  AvatarBadge,
  HStack,
  Stack,
  Text,
  Box,
  Center,
  Circle,
  Heading,
  Image,
  Grid,
  Textarea,
  WrapItem,
  Container, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  extendTheme,
  ColorModeScript,
  Flex
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react";
import { useRouter } from "next/navigation.js"
import Link from "next/link.js"

//IMPORTANT NOTE: default function is changed to export both HTML and the code for managing account creation
const Register = () => {
    //Used to help show errors
    const [error, setError] = useState("");
    //Redirects current page
    const router = useRouter();
    //REGEX check on the email field
    const isValidEmail = (email) => {
        const emailReg = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+/i;
        return emailReg.test(email);
    };
    //Called when submit button is clicked, manages user account creation.
    const handleSubmit = async (e) => {
        e.preventDefault();
        //Gets values of the 3 fields, stores in variables
        const email = e.target[0].value;
        const username = e.target[1].value;
        const password = e.target[2].value;
        //Will deny account creation if email is not valid. 
        //NOTE: we could add more limitations here like password length and such.
        if (!isValidEmail(email)) {
            setError("This is not a valid email.");
            return;
        }
        try {
            //Creates POST to send to route.js in the register folder
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "applications/json",},
                body: JSON.stringify({
                    email,
                    username,
                    password
                })
            })
            //Error for if the username/email is in the DB already
            if (res.status == 400) {
                setError("Already registered.");
            }
            //Signifies that account is created, automatically sends user to the profile page (can be changed)
            if (res.status == 200) {
                setError("");
                router.push("/profile");
            }
        }catch(error) {
            setError("Error, please try again.");
        }
    } 
    return (
        <ChakraProvider>
             <title>Film Finder - Signup</title>
            <Box backgroundColor="#2D3748">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <Flex>
                            <div className="col-1">
                                <a href='/'><Logo /></a>
                            </div>
                            <div className="col-10">
                                <Box w='100%' minH='1400px' borderWidth='5px' boxShadow='dark-lg' borderColor='#171923' borderRadius='lg' backgroundColor='#A0AEC0'>
                                    <Center>
                                        <Text fontSize="40" margin="20px">Sign Up</Text>
                                    </Center>
                                    <Center>
                                        <Box w="50%" bg="lightslategrey" borderRadius="100px" minHeight="800px">
                                            <Center>
                                                <Box w="60%" marginTop="100px">
                                                    <Grid templateColumns="1fr" gap="75px">
                                                    <form onSubmit={handleSubmit}>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Email :</Text>
                                                            </div>
                                                            <Input placeholder='email' type='text' required></Input>
                                                        </Flex>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Username :</Text>
                                                            </div>
                                                            <Input placeholder='username' type='text' required></Input>
                                                        </Flex>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Password :</Text>
                                                            </div>
                                                            <Input placeholder='pass' type='password' required></Input>
                                                        </Flex>
                                                        <Button olorScheme='blue' margin='5px' pos='absolute' marginTop="150px" type='submit'>Create account</Button>
                                                        <Text>{error && error}</Text>
                                                    </form>
                                                    </Grid>
                                                    <Center>
                                                        <Text marginTop="325px">Already have an account?</Text>
                                                        <Button colorScheme='blue' margin='5px' pos='absolute' marginTop="400px"> <Link Link href="signup">Log In Here</Link></Button>
                                                    </Center>
                                                </Box>
                                            </Center>
                                        </Box>
                                    </Center>
                                </Box>
                            </div>
                        </Flex>
                    </div>
                </div>
            </Box>
        </ChakraProvider>
        )
};
export default Register;