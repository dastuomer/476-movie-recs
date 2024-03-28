'use client';
import * as React from "react";
import Logo from "../components/logo.js";
import {
    Button,
    Input,
    Text,
    Box,
    Center,
    Grid,
    Flex
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react";
import { useRouter } from "next/navigation.js"
import Link from "next/link.js"
const Register = () => {
    //Used for error display
    const [error, setError] = useState("");
    //Redirects current page
    const router = useRouter();
    //REGEX check for email submission
    const isValidEmail = (email) => {
        const emailReg = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+/i;
        return emailReg.test(email);
    };
    //Handler for account creation
    const handleSubmit = async (e) => {
        // Used for timeliness -> console.time(handleSubmit);
        e.preventDefault();
        //Gets values of the input fields
        const email = e.target[0].value;
        const username = e.target[1].value;
        const password = e.target[2].value;
        //Will check for a valid email with the REGEX function
        if (!isValidEmail(email)) {
            setError("This is not a valid email.");
            return;
        }
        try {
            //Creates a POST request to send to the route file in /api/register
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "applications/json",
                },
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
            //Signifies that account is created, automatically sends user to the login page
            if (res.status == 200) {
                setError("");
                router.push("/login");
            }
        } catch (error) {
            setError("Error, please try again.");
        }
        // Used for timeliness -> console.timeEnd(handleSubmit);
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
                                                        {/*Form for the user to submit their account credentials*/}
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
                                                            <Button colorScheme='blue' margin='5px' pos='absolute' marginTop="150px" type='submit'>Create account</Button>
                                                            <Text>{error && error}</Text>
                                                        </form>
                                                    </Grid>
                                                    <Center>
                                                        <Text marginTop="325px">Already have an account?</Text>
                                                        <Button colorScheme='blue' margin='5px' pos='absolute' marginTop="400px"> <Link Link href="login">Log In Here</Link></Button>
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