import * as React from "react";
import Logo from "../components/logo.js";
import TheReturnOfTheKing from "../components/movie-picture.jsx";
import NavDrawer from "@/app/components/Drawer";
import { ChakraProvider } from "@chakra-ui/react";
import StarRating from "../components/stars.js";
import {
    Divider,
    Input,
    Text,
    Box,
    Flex,
    Image
} from "@chakra-ui/react";
import CheckLogin from "@/app/api/navigate/route.jsx"
import { getServerSession } from "next-auth"
{/*Obtain Selected User's Username, and Review list*/}

export default function Page() {
    const ses = getServerSession();
    CheckLogin(ses);
    return (
        <ChakraProvider>
            <title>Film Finder - Friend's Reviews</title>
            <Box backgroundColor="#2D3748">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <Flex>
                            <div className="col-1">
                                <a href='/'><Logo /></a>
                            </div>
                            <div className="col-10">
                                <Box w='100%' minH='1400px' borderWidth='5px' boxShadow='dark-lg' borderColor='#171923' borderRadius='lg' backgroundColor='#A0AEC0'>
                                    <div className="d-flex justify-content-center mt-4">
                                        <div>
                                            <h1>User's Movie Reviews</h1>{/*Selected User's Username*/}
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-9">
                                            <Input placeholder='Search Movies' />{/*Filter's selected User's review list for movies*/}
                                        </div>
                                    </div>
                                    <br /><Divider /><br />
                                    <div className="row justify-content-center">
                                        <div className="col-11">
                                            <Box className="container-fluid" bg='#4A5568' w='100%' p={20} color='white' marginTop={3} borderRadius='20'>
{/*Loop for each Review Selected user has made*/}
{/*Obtain each movie's Poster, Title, Review and Selected User's rating*/}
                                                <Flex gap="20px">
                                                    <div className="col-2">
                                                        <Image className="align-left" width={200} height={200} src=""></Image>{/*Movie's Poster*/}
                                                        <StarRating />{/*User's rating of the movies*/}
                                                    </div>
                                                    <div>
                                                        <Text fontSize="25">Movie Title</Text>{/*Movie title*/}
                                                        <Box borderColor="black" borderWidth="2px" borderRadius="5px" height="250px" width="1000px">
                                                            <Text fontSize="16" margin="10px">Selected User's Review of the movie</Text>{/*Selected user's review text*/}
                                                        </Box>
                                                    </div>
                                                </Flex><br/>
{/*End Loop*/}
                                            </Box>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                            <div className="col-1">
                                <NavDrawer />
                            </div>
                        </Flex>
                    </div>
                </div>
            </Box>
        </ChakraProvider>
    )
}