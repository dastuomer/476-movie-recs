import * as React from "react";
import Logo from "../components/logo.js";
import {
    Divider,
    Button,
    Text,
    Box,
    Center,
    Link,
    Image,
    Grid,
    Textarea,
    Flex,
    Input
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'

export default function Page() {
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
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Username :</Text>
                                                            </div>
                                                            <Input></Input>
                                                        </Flex>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Password :</Text>
                                                            </div>
                                                            <Input></Input>
                                                        </Flex>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Avatar :</Text>
                                                            </div>
                                                            <Input></Input>
                                                        </Flex>
                                                    </Grid>
                                                    <Center>
                                                        <Button colorScheme='blue' margin='5px' pos='absolute' marginTop="150px"> <Link href="profile">Create Account</Link></Button>
                                                    </Center>
                                                    <Center>
                                                        <Text marginTop="325px">Already have an account?</Text>
                                                        <Button colorScheme='blue' margin='5px' pos='absolute' marginTop="400px"> <Link href="login">Log In</Link></Button>
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