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
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js"
import {signIn, useSession } from "next-auth/react";
import Link from "next/link.js"

//IMPORTANT NOTE: default function is changed to export both HTML and the code for managing account creation
const Login = () => {
    //Redirects current page
    const router = useRouter();
    //Used to help show errors
    const [error, setError] = useState("");
    //Checks the current user session and if they are logged in. 
    const session = useSession();

    //Checks if user is logged in already and directs to profile automatically if true
    useEffect(() => {
        if (session?.status === "authenticated") {
            router.replace("/profile");
        }
    }, [session, router])
    
    //REGEX check on the email field
    const isValidEmail = (email) => {
        const emailReg = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+/i;
        return emailReg.test(email);
    };

    //Handles the login attempt from the user.
    const handleSubmit = async (e) => {
        e.preventDefault();
        //Gets the values out of the input fields and stores them in variables
        const email = e.target[0].value;
        const username = e.target[1].value;
        const password = e.target[2].value;
        //Will give an error message if the email entered doesnt pass REGEX check
        if (!isValidEmail(email)) {
            setError("This is not a valid email.");
            return;
        }
        //Attempts to sign in the user given the user's inputs.
        const res = await signIn("credentials", {
            redirect: false,
            email,
            username,
            password
        })

        //Will tell the user that their login isnt found in the DB or they typed in something wrong.
        if (res?.error) {
            setError("Invalid email or password res error.");
            //Sent to profile page upon successful login
            if (res?.url) router.replace("/profile")
        } else {
            console.log(res?.url)
            setError("");
        }
    }
    return (
            <ChakraProvider>
                <title>Film Finder - Login</title>
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
                                        <Text fontSize="40" margin="20px">Log In</Text>
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
                                                            <Input placeholder='email' type='text' variant='filled' required></Input>
                                                        </Flex>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Username :</Text>
                                                            </div>
                                                            <Input placeholder='username' type='text' variant='filled' required></Input>
                                                        </Flex>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Password :</Text>
                                                            </div>
                                                            <Input placeholder='pass' type='password' variant='filled' required></Input>
                                                        </Flex>
                                                        <Button colorScheme='blue' margin='5px' pos='absolute' marginTop="200px" type='submit'>Log In</Button>
                                                        <Text>{error && error}</Text>
                                                    </form>
                                                    </Grid>
                                                    <Center>
                                                        
                                                    </Center>
                                                    <Center>
                                                        <Text marginTop="425px">Don't have an account?</Text>
                                                        <Button colorScheme='blue' margin='5px' pos='absolute' marginTop="500px"> <Link href="signup">Create Account Here</Link></Button>
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
}
export default Login;