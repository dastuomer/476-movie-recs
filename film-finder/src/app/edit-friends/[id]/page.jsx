'use client';
import * as React from "react";
import Logo from "../../components/logo.js";
import {
  Button,
  Input,
  Text,
  Box,
  Center,
  Grid,
  Textarea,
  Flex
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js"
import { useSession } from "next-auth/react";
import Link from "next/link.js"

//IMPORTANT NOTE: default function is changed to export both HTML and the code for managing account creation
const Edit = ({params}) => {
    //Redirects current page
    const router = useRouter();
    //Used to help show errors
    const [error, setError] = useState("");
    //Checks the current user session and if they are logged in. 
    const session = useSession();

    //Checks if user is logged in already and directs to profile automatically if true
    useEffect(() => {
        if (!session?.status === "authenticated") {
            router.replace("/");
        }
    }, [session, router])

    const handleFriend= async(e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const {id} = params;

        try {
            const res = await fetch(`http://localhost:3000/api/editfriend/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({username}),
            });
            if (!res.ok)
            {   
                setError("User not found!");
                throw new Error("User not found!");
            }
            else {
                setError("Friend List Updated!");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }

    //Handles the login attempt from the user.
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
                                        <Text fontSize="40" margin="20px">Add/Remove Friends</Text>
                                    </Center>
                                    <Center>
                                        <Box w="60%" bg="lightslategrey" borderRadius="100px" minHeight="800px">
                                            <Center>
                                                <Box w="90%" marginTop="100px">
                                                    <Grid templateColumns="1fr" gap="20px">
                                                    <form onSubmit={handleFriend}>
                                                        <Flex>
                                                            <div className="col-4">
                                                                <Text fontSize="20">Enter Friend Username</Text>
                                                            </div>
                                                            <Input placeholder='Username' type='text' variant='filled' required></Input>
                                                            <Button colorScheme='blue' marginLeft='20px' marginRight='10px' size="lg" type='submit'>Add</Button>
                                                        </Flex>
                                                    </form>
                                                    </Grid>
                                                    <Center>
                                                        <Text>{error && error}</Text>
                                                    </Center>
                                                    <Center>
                                                        <Button colorScheme='blue' marginTop='20px' marginBottom='20px'> <Link href="/view-friends">Back to Friends</Link></Button>
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
export default Edit;