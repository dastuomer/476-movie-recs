import * as React from "react";
import Logo from "../components/logo.js";
import NavDrawer from "@/app/components/Drawer";
import StarRatingStatic from "../components/star_static.js";
import {
  Button,
  Input,
  Text,
  Box,
  Center,
  Link,
  Image,
  Grid,
  Flex,
  Heading
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import CheckLogin from "@/app/api/navigate/route.jsx"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation.js"
import { authOptions } from "../api/auth/[...nextauth]/route.js";
import { getUserInfo } from "@/app/review-my-movie/[id]/page.jsx"

{/*Obtain User's email, and Movie list*/ }

async function getMovieList(email) {

  let usersMovies = []
  const UMInfo = await getUsersMovies(email)
  //console.log(UMInfo)

  for (let x = 0; x < UMInfo.movieList.length; x++) {
    usersMovies.push(UMInfo.movieList[x].movieID)
  }

  const moviesArray = [];
  for (let i = 0; i < usersMovies.length; i++) {

    const MInfo = await getMovieInfo(usersMovies[i]);
    const id = MInfo.movieInfo._id
    const title = MInfo.movieInfo.title
    const genres = MInfo.movieInfo.genres
    const stars = Math.round(MInfo.movieInfo.imdb.rating / 2.0)
    const poster = MInfo.movieInfo.poster

    moviesArray.push(
      <Box borderWidth="3px" borderColor="#171923" minHeight="300px">
        <Image width='250px' height='300px' objectFit='cover' src={poster}></Image>{/*src = Movie Poster URL*/}
      </Box>
    )
    moviesArray.push(
      <div>
        <Text fontSize={25} >{title}</Text>{/*Movie title*/}
        <Text>{genres}</Text>{/*Movie Genres*/}
        <StarRatingStatic ratingNum={stars} />{/*Movie's Total average Star rating -- OR -- IMDB average rating if we have that*/}
        <Button colorScheme='blue' marginTop='5px' > <Link href={`review-my-movie/${id}`}>Reviews</Link></Button>{/*Goes to reviews page of the selected movie*/}
      </div>
    )
  }
  console.log("##### DONE #####")
  return moviesArray;
}

const getUsersMovies = async (email) => {
  try {
    //console.log(`http://localhost:3000/api/viewMoviesAPI?email=${email}`)
    const res = await fetch(`http://localhost:3000/api/viewMoviesAPI?email=${email}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("failed to fetch movie list");
    }

    const myJSON = JSON.parse(JSON.stringify(await res.json()));
    console.log(myJSON)
    return await myJSON;
  } catch (error) {
    console.log("Error loading movie list: ", error);
  }

};

export const getMovieInfo = async (userMovieListID) => {
  try {
    //console.log(`http://localhost:3000/api/viewMoviesAPI?id=${userMovieListID}`)
    const res = await fetch(`http://localhost:3000/api/viewMoviesAPI?id=${userMovieListID}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("failed to fetch movie info");
    }

    const myJSON = JSON.parse(JSON.stringify(await res.json()));
    console.log(myJSON)
    return await myJSON;
  } catch (error) {
    console.log("Error loading movie info: ", error);
  }

};

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const { info } = await getUserInfo(session.user.email);

  const userEmail = info.email
  //const testEmail = "muck@gmail.com"

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
                    <Heading colorScheme='blue' fontSize="45" marginTop="30px">My Movies </Heading>
                  </Center>
                  <Center>
                    <Input size="lg" variant="outline" margin="20px" placeholder="Search your movies" />{/*Search filter's user's movie list displayed*/}
                  </Center>
                  <br />
                  <Box borderWidth="2px" borderColor="#171923" minHeight="850px">
                    <Grid templateColumns='repeat(6, 1fr)' gap='20px'>
                      {/*
                      <Image width='200px' height='250px' objectFit='cover' src=""></Image>
                      <div>
                        <Text fontSize={25} >Movie Title</Text>
                        <Text> - Genre, Genre, Genre</Text>
                        <StarRating />
                        <Button colorScheme='blue' margin='5px' pos='absolute' > <Link href="review-my-movie">Reviews</Link></Button>
                      </div>
                      */}
                      {await getMovieList(userEmail)} {/*delete previous movie print^^ once connected*/}
                    </Grid>
                  </Box>
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
