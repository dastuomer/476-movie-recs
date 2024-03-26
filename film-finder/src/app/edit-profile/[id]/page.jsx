'use client';
import * as React from "react";
import Logo from "../../components/logo.js";
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

    const checkLink = (link) => {
        return(link.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    const handlePfp= async(e) => {
        e.preventDefault();
        const pfp = e.target[0].value;
        const {id} = params;

        if (!checkLink(pfp)) {
            setError("This is not a valid image link.");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/api/editprofile/pfp/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({pfp}),
            });
            if (!res.ok)
            {   
                setError("Failed to update.");
                throw new Error("Failed to update.");
            }
            else {
                setError("Profile Updated!");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const handleBanner= async(e) => {
        e.preventDefault();
        const banner = e.target[0].value;
        const {id} = params;

        if (!checkLink(banner)) {
            setError("This is not a valid image link.");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/api/editprofile/banner/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({banner}),
            });
            if (!res.ok)
            {   
                setError("Failed to update.");
                throw new Error("Failed to update.");
            }
            else {
                setError("Profile Updated!");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const handleBio= async(e) => {
        e.preventDefault();
        const bio = e.target[0].value;
        const {id} = params;
        try {
            const res = await fetch(`http://localhost:3000/api/editprofile/bio/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({bio}),
            });
            if (!res.ok)
            {   
                setError("Failed to update.");
                throw new Error("Failed to update.");
            }
            else {
                setError("Profile Updated!");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const handleGenres= async(e) => {
        e.preventDefault();
        const genres = e.target[0].value;
        const {id} = params;
        
        try {
            const res = await fetch(`http://localhost:3000/api/editprofile/genres/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({genres}),
            });
            if (!res.ok)
            {   
                setError("Failed to update.");
                throw new Error("Failed to update.");
            }
            else {
                setError("Profile Updated!");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const handleActor= async(e) => {
        e.preventDefault();
        const actor = e.target[0].value;
        const {id} = params;

        if (!checkLink(actor)) {
            setError("This is not a valid image link.");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/api/editprofile/actor/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({actor}),
            });
            if (!res.ok)
            {   
                setError("Failed to update.");
                throw new Error("Failed to update.");
            }
            else {
                setError("Profile Updated!");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const handleDirector= async(e) => {
        e.preventDefault();
        const director = e.target[0].value;
        const {id} = params;

        if (!checkLink(director)) {
            setError("This is not a valid image link.");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/api/editprofile/director/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({director}),
            });
            if (!res.ok)
            {   
                setError("Failed to update.");
                throw new Error("Failed to update.");
            }
            else {
                setError("Profile Updated!");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const handleSoundtrack= async(e) => {
        e.preventDefault();
        const soundtrack = e.target[0].value;
        const {id} = params;

        if (!checkLink(soundtrack)) {
            setError("This is not a valid image link.");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/api/editprofile/soundtrack/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({soundtrack}),
            });
            if (!res.ok)
            {   
                setError("Failed to update.");
                throw new Error("Failed to update.");
            }
            else {
                setError("Profile Updated!");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const handleCharacter= async(e) => {
        e.preventDefault();
        const character = e.target[0].value;
        const {id} = params;

        if (!checkLink(character)) {
            setError("This is not a valid image link.");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/api/editprofile/character/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({character}),
            });
            if (!res.ok)
            {   
                setError("Failed to update.");
                throw new Error("Failed to update.");
            }
            else {
                setError("Profile Updated!");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const handleMovie= async(e) => {
        e.preventDefault();
        const favmovie = e.target[0].value;
        const {id} = params;
        try {
            const res = await fetch(`http://localhost:3000/api/editprofile/favmovie/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({favmovie}),
            });
            if (!res.ok)
            {   
                setError("Failed to update.");
                throw new Error("Failed to update.");
            }
            else {
                setError("Profile Updated!");
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
                                        <Text fontSize="40" margin="20px">Edit Profile</Text>
                                    </Center>
                                    <Center>
                                        <Box w="60%" bg="lightslategrey" borderRadius="100px" minHeight="800px">
                                            <Center>
                                                <Box w="90%" marginTop="100px">
                                                    <Grid templateColumns="1fr" gap="10px">
                                                    <form onSubmit={handlePfp}>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Profile Picture:</Text>
                                                            </div>
                                                            <Input placeholder='image link' type='text' variant='filled' required></Input>
                                                            <Button colorScheme='blue' marginLeft='20px' marginRight='10px' size="lg" type='submit'>Change</Button>
                                                        </Flex>
                                                    </form>
                                                    <form onSubmit={handleBanner}>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Banner :</Text>
                                                            </div>
                                                            <Input placeholder='image link' type='text' variant='filled' required></Input>
                                                        <Button colorScheme='blue' marginLeft='20px' marginRight='10px' size="lg" type='submit'>Change</Button>
                                                        </Flex>
                                                    </form>
                                                    <form onSubmit={handleBio}>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Bio :</Text>
                                                            </div>
                                                            <Textarea placeholder='bio here' type='text' variant='filled' required></Textarea>
                                                        <Button colorScheme='blue' marginLeft='20px' marginRight='10px' size="lg" type='submit'>Change</Button>
                                                        </Flex>
                                                    </form>
                                                    <form onSubmit={handleGenres}>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Genres :</Text>
                                                            </div>
                                                            <Textarea placeholder='genres here' type='text' variant='filled' required></Textarea>
                                                        <Button colorScheme='blue' marginLeft='20px' marginRight='10px' size="lg" type='submit'>Change</Button>
                                                        </Flex>
                                                    </form>
                                                    <form onSubmit={handleActor}>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Favourite Actor :</Text>
                                                            </div>
                                                            <Input placeholder='image link' type='text' variant='filled' required></Input>
                                                        <Button colorScheme='blue' marginLeft='20px' marginRight='10px' size="lg" type='submit'>Change</Button>
                                                        </Flex>
                                                    </form>
                                                    <form onSubmit={handleDirector}>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Favourite Director :</Text>
                                                            </div>
                                                            <Input placeholder='image link' type='text' variant='filled' required></Input>
                                                        <Button colorScheme='blue' marginLeft='20px' marginRight='10px' size="lg" type='submit'>Change</Button>
                                                        </Flex>
                                                    </form>
                                                    <form onSubmit={handleSoundtrack}>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Favourite Soundtrack :</Text>
                                                            </div>
                                                            <Input placeholder='image link' type='text' variant='filled' required></Input>
                                                        <Button colorScheme='blue' marginLeft='20px' marginRight='10px' size="lg" type='submit'>Change</Button>
                                                        </Flex>
                                                    </form>
                                                    <form onSubmit={handleCharacter}>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Favourite Character :</Text>
                                                            </div>
                                                            <Input placeholder='image link' type='text' variant='filled' required></Input>
                                                        <Button colorScheme='blue' marginLeft='20px' marginRight='10px' size="lg" type='submit'>Change</Button>
                                                        </Flex>
                                                    </form>
                                                    <form onSubmit={handleMovie}>
                                                        <Flex>
                                                            <div className="col-6">
                                                                <Text fontSize="20">Favourite Movie :</Text>
                                                            </div>
                                                            <Input placeholder='name' type='text' variant='filled' required></Input>
                                                        <Button colorScheme='blue' marginLeft='20px' marginRight='10px' size="lg" type='submit'>Change</Button>
                                                        </Flex>
                                                    </form>
                                                    </Grid>
                                                    <Center>
                                                        <Text>{error && error}</Text>
                                                    </Center>
                                                    <Center>
                                                        <Button colorScheme='blue' marginTop='20px'> <Link href="/profile">Back to Account</Link></Button>
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