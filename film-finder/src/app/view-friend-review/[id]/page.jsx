import * as React from "react";
import Logo from "../../components/logo.js";
import NavDrawer from "@/app/components/Drawer";
import StarRatingStatic from "../../components/star_static.js";
import {
  Button,
  Text,
  Box,
  Center,
  Link,
  Image,
  Grid,
  GridItem,
  Flex,
  Heading
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation.js"
import { authOptions } from "../../api/auth/[...nextauth]/route.js";
import { getUserInfo } from "@/app/review-my-movie/[id]/page.jsx"

//Function used for displaying all movies that the user has reviewd on the page
async function getMovieList(email) {
  let usersMovies = []
  //Gets list of reviewed movies
  const UMInfo = await getUsersMovies(email);

  //Stores all of the movie objects in an array
  for (let x = 0; x < UMInfo.movieList.length; x++) {
    usersMovies.push(UMInfo.movieList[x]);
  }

  const moviesArray = [];
  //Will go through every movie object and display it on the page
  for (let i = 0; i < usersMovies.length; i++) {
    //Gets info of current movie object
    const MInfo = await getMovieInfo(usersMovies[i].movieID);
    //Assign variables for relevant information that will be displayed on the website
    const id = MInfo.movieInfo._id;
    const title = MInfo.movieInfo.title;
    const stars = Math.round(MInfo.movieInfo.imdb.rating / 2.0);
    const poster = MInfo.movieInfo.poster;

    //Push the movie poster onto the website
    moviesArray.push(
      <Box borderWidth="3px" borderColor="#171923" minHeight="350px">
        <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(6, 1fr)">
          <GridItem rowSpan={3} colSpan={1}>
          <Image width='250px' height='350px' objectFit='cover' src={poster}></Image>{/*src = Movie Poster URL*/}
          </GridItem>
          <GridItem rowSpan={3} colSpan={5}>
            <Text fontSize={30} as="u">{title}</Text>{/*Movie title*/}
            <Flex marginTop="5px">
              <Text fontSize={20} marginRight="5px">This User's Rating:</Text>
              <StarRatingStatic ratingNum={usersMovies[i].rating} />
            </Flex>
            <Text fontSize={20}>Review: {usersMovies[i].review}</Text>
          </GridItem>
        </Grid>
        {/*Movie's Total average Star rating -- OR -- IMDB average rating if we have that*/}
      </Box>
    )

  }
  return moviesArray;
}

//Function to get the list of movies the user has reviewed
const getUsersMovies = async (email) => {
  try {
    //Sends a request to the route file at /api/viewMoviesAPI, will return a list of all moviesthe user has watched
    const res = await fetch(`http://localhost:3000/api/viewMoviesAPI?email=${email}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error("failed to fetch movie list");
    }
    //Converts the request into usable data and returns it
    const myJSON = JSON.parse(JSON.stringify(await res.json()));
    return await myJSON;
  } catch (error) {
    console.log("Error loading movie list: ", error);
  }

};

//Gets the info of each movie that will be displayed on the website
export const getMovieInfo = async (userMovieListID) => {
  try {
    //Sends a request to the route file at /api/viewMoviesAPI, which will return the info of a movie
    const res = await fetch(`http://localhost:3000/api/viewMoviesAPI?id=${userMovieListID}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error("failed to fetch movie info");
    }
    //Converts the request into usable data and returns it
    const myJSON = JSON.parse(JSON.stringify(await res.json()));
    return await myJSON;
  } catch (error) {
    console.log("Error loading movie info: ", error);
  }
};

export default async function Page({params}) {
  //Checks to see if the user is logged in, will reroute to main page if not
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  //Gets info of current user
  const { info } = await getUserInfo(params.id);
  const userEmail = params.id;

  return (
    <ChakraProvider>
      <title>Film Finder - View {info.username}'s Reviews</title>
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
                    <Heading colorScheme='blue' fontSize="45" marginTop="30px">{info.username}'s Reviews</Heading>
                  </Center>
                  <br />
                  <Box borderWidth="2px" borderColor="#171923" >
                    <Grid templateColumns='repeat(1, 1fr)' gap='10px' margin="5px">
                      {/*Populatest the page with the movies that the user has reviewed*/}
                      {await getMovieList(userEmail)}
                    </Grid>
                  </Box>
                  <Center>
                    <Button colorScheme='blue' margin='5px' algin="" size='md'> <Link href="/view-friends">Back to Friends</Link></Button>
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
