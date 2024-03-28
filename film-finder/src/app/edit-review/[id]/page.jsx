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

const Edit = ({ params }) => {
    //Redirects current page
    const router = useRouter();
    //Used to help show errors
    const [error, setError] = useState("");
    //Checks the current user session and if they are logged in. 
    const session = useSession();
    //Variables with important information that is being passed to this page in its url
    const gotten = JSON.parse(decodeURIComponent(JSON.stringify(params)));
    const midstep = gotten.id;
    const convert = new URLSearchParams(midstep);
    const id = convert.get("movieID");
    const email = convert.get("email")
    const username = convert.get("username");
    const title = convert.get("title");
    var starRating = 0;
    //Checks if user is logged in already and directs to home page automatically if false
    useEffect(() => {
        if (!session?.status === "authenticated") {
            router.replace("/");
        }
    }, [session, router])

    //Handles the submission of reviews, gets value from form on the page
    const handleReview = async (e) => {
        e.preventDefault();
        //Gets the values from the input field
        const rating = e.target[5].value;
        const review = e.target[6].value;
        try {
            //Sends a request to the route file at /api/editreviews, passes a bunch of information that should either create or edit a review
            const res = await fetch(`http://localhost:3000/api/editreview/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ username, title, review, rating, email }),
            });
            if (!res.ok) {
                //Displays an error if the review can't be found (this should never happen)
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

    //Function that allows a review to be removed from the database
    const removeReview= async(e) => {
        e.preventDefault();
        try {
            //Sends a request to the route file at /api/deletereview, passes the email of the poster and the movie id, should delete the review from the DB
            const res = await fetch(`http://localhost:3000/api/deletereview/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({email}),
            });
            if (!res.ok)
            {   
                //Returns error if review not found
                setError("Review not found!");
                throw new Error("Review not found!");
            }
            else {
                //Lets user know the review is deleted
                setError("Review Deleted!");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }
    return (
        <ChakraProvider>
            <title>Film Finder - Edit Your Review</title>
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
                                                    {/*Form for submitting a review*/}
                                                    <form onSubmit={handleReview}>
                                                        <Flex>
                                                            <Text marginRight="10px" fontSize={20}>Your Movie Rating:</Text>
                                                            <StarRating starRating={starRating} id=''/>
                                                        </Flex>
                                                        <Textarea w="100%" outlineColor="black" minHeight="200px" placeholder="Write your review!" variant="filled" required></Textarea>
                                                        <Button colorScheme='blue' size="md" type='submit' marginTop="20px">Submit Review</Button>
                                                        {/*Button for calling the function that deletes a review from the database*/}
                                                        <Button colorScheme='red' size="md" marginTop="20px" onClick={removeReview}>Delete Review</Button>
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