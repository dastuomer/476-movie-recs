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

{/*Obtain User's email, and Movie list*/ }

async function getMovieList(userMovieList) {
  const moviesArray = [];
  for (let i = 0; i < userMovieList.length; i++) {

    const MInfo = await getMovieInfo(userMovieList[i]);
    let fields = Object.values(MInfo.movieInfo)
    const title = fields[1]
    const stars = Math.round((fields[2]) / 2.0)
    const genre = fields[3]
    const poster = fields[4]

    moviesArray.push(
      <div>
        <Box borderWidth="3px" borderColor="#171923" minHeight="300px">
          <Image width='250px' height='300px' objectFit='cover' src={poster}></Image>{/*src = Movie Poster URL*/}
        </Box>
      </div>
    )
    moviesArray.push(
      <div>
        
          <Text fontSize={25} >{title}</Text>{/*Movie title*/}
          <Text>{genre}</Text>{/*Movie Genres*/}
          <StarRatingStatic ratingNum={stars}/>{/*Movie's Total average Star rating -- OR -- IMDB average rating if we have that*/}
          <Button colorScheme='blue' marginTop='5px' > <Link href={`review-my-movie/${title}`}>Reviews</Link></Button>{/*Goes to reviews page of the selected movie*/}
        
      </div>
    )
  }
  return moviesArray;
}

export const getMovieInfo = async (userMovieListTitle) => {
  try {
    //console.log(`http://localhost:3000/api/viewMoviesAPI?title=${userMovieListTitle}`)
    const res = await fetch(`http://localhost:3000/api/viewMoviesAPI?title=${userMovieListTitle}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("failed to fetch movie info");
    }

    const myJSON = JSON.parse(JSON.stringify(await res.json()));
    //console.log(myJSON)
    return await myJSON;
  } catch (error) {
    console.log("Error loading movie info: ", error);
  }

};

export default async function Page() {
  const session = getServerSession();
  if (!session){
    redirect("/");
  }

  const testmovies = ['Toy Story (1995)', 'V for Vendetta (2005)', 'The AristoCats (1970)']

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
                  <div>
                    <Center>
                      <Input size="lg" variant="outline" margin="20px" placeholder="Search your movies" />{/*Search filter's user's movie list displayed*/}
                    </Center>
                    <br />
                  </div>
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
                      
                        
                          {getMovieList(testmovies)} {/*delete previous movie print^^ once connected*/}
                        
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
