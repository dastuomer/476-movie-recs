'use client';
import * as React from "react";
import Logo from "../../components/logo.js";
import {
    Button,
    Text,
    Box,
    Center,
    Textarea,
    Flex
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js"
import { useSession } from "next-auth/react";
import Link from "next/link.js"
import StarRating from "@/app/components/stars.js";

//IMPORTANT NOTE: default function is changed to export both HTML and the code for managing account creation
const Edit = ({ params }) => {
    //Redirects current page
    const router = useRouter();
    //Used to help show errors
    const [error, setError] = useState("");
    //Checks the current user session and if they are logged in. 
    const session = useSession();

    const gotten = JSON.parse(decodeURIComponent(JSON.stringify(params)));
    const midstep = gotten.id;
    const convert = new URLSearchParams(midstep);
    const id = convert.get("email");
    const username = convert.get("username");
    const title = convert.get("title");

    //Checks if user is logged in already and directs to profile automatically if true
    useEffect(() => {
        if (!session?.status === "authenticated") {
            router.replace("/");
        }
    }, [session, router])

    const handleReview = async (e) => {
        e.preventDefault();
        const rating = e.target[0].value;
        const review = e.target[1].value;
        try {
            const res = await fetch(`http://localhost:3000/api/editreview/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ username, title, review }),
            });
            if (!res.ok) {
                setError("Failed to change review.");
                throw new Error("Failed to change review.");
            }
            else {
                setError("Review Updated!");
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
                                        <Box w="60%" bg="lightslategrey" borderRadius="100px" minHeight="800px" marginTop="50px" >
                                            <Center>
                                                <Text fontSize="40" margin="50px" as="u">{title}</Text>
                                            </Center>
                                            <Center>
                                                <Box w="80%" marginTop="px">
                                                    <form onSubmit={handleReview}>
                                                        <Flex>
                                                            <Text marginRight="10px" fontSize={20}>Your Movie Rating:</Text>
                                                            <StarRating/>
                                                        </Flex>
                                                        <Textarea w="100%" outlineColor="black" minHeight="200px" placeholder="Write your review!" variant="filled" required></Textarea>
                                                        <Button colorScheme='blue' size="md" type='submit' marginTop="20px">Submit Review</Button>
                                                    </form>
                                                    <Center>
                                                        <Text>{error && error}</Text>
                                                    </Center>
                                                    <Center>
                                                        <Button colorScheme='blue' margin='5px' marginTop="200px"> <Link href="/view-my-movies">Back to Movies</Link></Button>
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