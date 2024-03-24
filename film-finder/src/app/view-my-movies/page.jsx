import * as React from "react";
import Logo from "../components/logo.js";
import StarRating from "../components/stars.js";
import NavDrawer from "@/app/components/Drawer";
import {
  Divider,
  Button,
  Input,
  Text,
  Box,
  Center,
  Link,
  Image,
  Grid,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  TabPanel,
  Flex
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import CheckLogin from "@/app/api/navigate/route.jsx"
import { getServerSession } from "next-auth"

{/*Obtain user's movie list (Search Reviews for matching UserID, and get MovieIDs)*/ }

function getMovieList(/*User's Movie list*/) {
  const moviesArray = [];
  for (let i = 0; i < 10 /*Number of Movies in user's list*/; i++) {
    {/*Obtain each movie's Poster, Title, ~maybe Genre, and Rating(~IMDB)*/}
    moviesArray.push(
      <div>
        <Image width='200px' height='250px' objectFit='cover' src=""></Image>{/*src = Movie Poster URL*/}
      </div>
    )
    moviesArray.push(
      <div>
        <Text fontSize={25} >Movie Title</Text>{/*Movie title*/}
        <Text> - Genre, Genre, Genre</Text>{/*Movie Genres*/}
        <StarRating />{/*Movie's Total average Star rating -- OR -- IMDB average rating if we have that*/}
        <Button colorScheme='blue' margin='5px' pos='absolute' > <Link href="review-my-movie">Reviews</Link></Button>{/*Goes to reviews page of the selected movie*/}
      </div>
    )
  }
  return moviesArray;
}

export default function Page() {
  const ses = getServerSession();
  CheckLogin(ses);
  return (
    <ChakraProvider>
      <title>Film Finder - Your Movies</title>
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
                    <Input size="lg" variant="outline" margin="50px" placeholder="Search your movies" />{/*Search filter's user's movie list displayed*/}
                  </Center>
                  <Tabs isFitted variant='solid-rounded' colorScheme='blue' margin='2px'>{/*~maybe remove these tabs*/}
                    <TabList mb='1em'>
                      <Tab>All</Tab>
                      <Tab>Comedy</Tab>
                      <Tab>Action</Tab>
                      <Tab>Drama</Tab>
                      <Tab>Horror</Tab>
                    </TabList>
                    <Divider />
                    <TabPanels>
                      <TabPanel>
                        <div>
                          <Text colorScheme='blue' fontSize="45" >My Movies </Text>
                          <br />
                        </div>
                        <Box borderWidth="2px" borderColor="grey" borderRadius="lg" minHeight="850px">
                          <Grid templateColumns='repeat(6, 1fr)' gap='10px' margin='15px'>
                            <Image width='200px' height='250px' objectFit='cover' src=""></Image>{/*Movie Poster URL*/}
                            <div>
                              <Text fontSize={25} >Movie Title</Text>{/*Movie title*/}
                              <Text> - Genre, Genre, Genre</Text>{/*Movie Genres*/}
                              <StarRating />{/*Movie's Total average Star rating -- OR -- IMDB average rating if we have that*/}
                              <Button colorScheme='blue' margin='5px' pos='absolute' > <Link href="review-my-movie">Reviews</Link></Button>{/*Goes to reviews page of the selected movie*/}
                            </div>
                            {getMovieList(/*User's Movie list -- OR -- UserID*/)} {/*delete previous movie print^^ once connected*/}
                          </Grid>
                        </Box>
                      </TabPanel>
                      <TabPanel>{/*Each tab panel would display the movies from the user's list but filter for only each repective genre*/}

                      </TabPanel>
                      <TabPanel>

                      </TabPanel>
                      <TabPanel>

                      </TabPanel>
                      <TabPanel>

                      </TabPanel>
                    </TabPanels>
                  </Tabs>
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
