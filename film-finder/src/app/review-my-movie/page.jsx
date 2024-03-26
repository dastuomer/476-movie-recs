import * as React from "react";
import Logo from "../components/logo.js";
import StarRating from "../components/stars.js";
import NavDrawer from "@/app/components/Drawer";
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
  Flex
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import CheckLogin from "@/app/api/navigate/route.jsx"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation.js"

{/*Obtain Selected movie's Poster, ~maybe genre, and reviews*/}

export default function Page() {
  const session = getServerSession();
  if (!session){
    redirect("/");
  }
  return (
    <ChakraProvider>
      <title>Film Finder - Review Movie</title>
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
                    <Text fontSize="5xl" as="b">Movie Reviews</Text>
                  </Center>
                  <Divider />
                  <Flex margin="50px">
                    <Image width='400px' height='500px' objectFit='cover' margin="20px" src=""></Image>{/*Movie poster URL*/}
                    <Box w="55%">
                      <Text fontSize='4xl' margin="15px" marginLeft="30px" as="u"> Movie Title </Text>{/*Movie Title*/}
                      <Text margin="5px" marginLeft="30px"> - Genre, Genre, Genre</Text>{/*Movie Genres*/}
                      <Flex marginTop="40px">
                        <Text marginLeft="45px" marginRight="10px" fontSize={20}>Rating:</Text>
                        <StarRating/>{/*Inputted Movie Rating*/}
                      </Flex>
                      <Textarea w="100%" outlineColor="black" minHeight="200px" marginLeft="45px" placeholder="Write your review!"></Textarea>{/*Inputted Review text*/}
                      <Button colorScheme='blue' margin='30px' marginLeft="55px"> <Link href="view-my-movies">Submit Review</Link></Button>{/*Submits review, Adds movie to User's movie list, and takes back to view my movies page*/}
                    </Box>
                  </Flex>
                  <Divider/>
                  <Center>
                    <Grid templateColumns='repeat(2, 1fr)' gap='10px' margin='35px'>
                      <Box w="95%" borderWidth="3px" borderRadius="lg" borderColor="grey" marginBottom="15px" minWidth="700px">
                        <Flex>
                          <Text margin="10px" fontSize="md">User's Review: </Text>{/*Username of reviewer*/}
                          <StarRating/>{/*Reviewr's rating of the movie*/}
                        </Flex>
                        <Text margin="10px" fontSize="md"> User's Review of the movie</Text>{/*Review text*/}
                      </Box>
                      {getMovieReviewList(/*Selected movie's Review list -- OR -- ReviewID*/)} {/*delete previous movie print^^ once connected*/}
                    </Grid>
                  </Center>
                  <Center>
                    <Button colorScheme='blue' margin='15px' > <Link href="view-my-movies">View Movies</Link></Button>
                  </Center>
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
