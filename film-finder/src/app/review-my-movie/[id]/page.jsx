import * as React from "react";
import Logo from "../../components/logo.js";
import StarRating from "../../components/stars.js";
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
import { getMovieInfo } from "../../view-my-movies/page.jsx";

{/*Obtain Selected Movie Title from button used*/ }

async function getSessionMovieInfo(MovieTitle) {
  const MInfo = await getMovieInfo(MovieTitle);

  let fields = Object.values(MInfo.movieInfo)
  const title = fields[1]
  const stars = Math.round((fields[2]) / 2.0)
  const genre = fields[3]
  const poster = fields[4]
  return (
    <Flex margin="50px">
      <Image width='400px' height='500px' objectFit='cover' margin="20px" src={poster}></Image>{/*Movie poster URL*/}
      <Box w="55%">
        <Text fontSize='4xl' margin="15px" marginLeft="30px" as="u"> {title} </Text>{/*Movie Title*/}
        <Text margin="5px" marginLeft="30px">{genre}</Text>{/*Movie Genres*/}
        <Flex marginTop="40px">
          <Text marginLeft="45px" marginRight="10px" fontSize={20}>Rating:</Text>
          <StarRating />{stars}{/*Inputted Movie Rating*/}
        </Flex>
        <Textarea w="100%" outlineColor="black" minHeight="200px" marginLeft="45px" placeholder="Write your review!"></Textarea>{/*Inputted Review text*/}
        <Button colorScheme='blue' margin='30px' marginLeft="55px"> <Link href="view-my-movies">Submit Review</Link></Button>{/*Submits review, Adds movie to User's movie list, and takes back to view my movies page*/}
      </Box>
    </Flex>
  );
};

async function getReviewList(movieTitle) {
  let reviewsUserList = []
  const RUInfo = await getReviewUsersList(movieTitle)

  for (let x = 0; x < RUInfo.userEmailList.length; x++) {
    reviewsUserList.push(RUInfo.userEmailList[x].userEmail)
  }

  const reviewsArray = [];
  for (let i = 0; i < reviewsUserList.length; i++) {

    const RInfo = await getReviewInfo(movieTitle, reviewsUserList[i])

    let Rfields = Object.values(RInfo.reviewInfo)

    const username = Rfields[3]
    const stars = Rfields[4]
    const review = Rfields[5]

    reviewsArray.push(
      <Box w="95%" borderWidth="3px" borderRadius="lg" borderColor="grey" marginBottom="15px" minWidth="700px">
        <Flex>
          <Text margin="10px" fontSize="md">{username}'s Review: </Text>{/*Username of reviewer*/}
          <StarRating />{stars}{/*Reviewr's rating of the movie*/}
        </Flex>
        <Text margin="10px" fontSize="md">{review}</Text>{/*Review text*/}
      </Box>
    )
  }
  return reviewsArray;
};

const getReviewUsersList = async (title) => {
  try {
    //console.log(`http://localhost:3000/api/reviewMovieAPI?title=${title}`)
    const res = await fetch(`http://localhost:3000/api/reviewMovieAPI?title=${title}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("failed to fetch review user info");
    }

    const myJSON = JSON.parse(JSON.stringify(await res.json()));
    //console.log(myJSON)
    return await myJSON;
  } catch (error) {
    console.log("Error loading review user info: ", error);
  }

};

const getReviewInfo = async (title, reviewsUserListEmail) => {
  try {
    //console.log(`http://localhost:3000/api/reviewMovieAPI?title=${title}&email=${reviewsUserListEmail}`)
    const res = await fetch(`http://localhost:3000/api/reviewMovieAPI?title=${title}&email=${reviewsUserListEmail}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("failed to fetch review info");
    }

    const myJSON = JSON.parse(JSON.stringify(await res.json()));
    //console.log(myJSON)
    return await myJSON;
  } catch (error) {
    console.log("Error loading review info: ", error);
  }

};

export default async function Page({ params }) {

  console.log(params)
  const movieTitle = params.id
  console.log(movieTitle)

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
                  {/*
                  <Flex margin="50px">
                    <Image width='400px' height='500px' objectFit='cover' margin="20px" src=""></Image>
                    <Box w="55%">
                      <Text fontSize='4xl' margin="15px" marginLeft="30px" as="u"> Movie Title </Text>
                      <Text margin="5px" marginLeft="30px"> - Genre, Genre, Genre</Text>
                      <Flex marginTop="40px">
                        <Text marginLeft="45px" marginRight="10px" fontSize={20}>Rating:</Text>
                        <StarRating />
                      </Flex>
                      <Textarea w="100%" outlineColor="black" minHeight="200px" marginLeft="45px" placeholder="Write your review!"></Textarea>
                      <Button colorScheme='blue' margin='30px' marginLeft="55px"> <Link href="view-my-movies">Submit Review</Link></Button>
                    </Box>
                  </Flex>
                  */}
                  {getSessionMovieInfo(movieTitle)}

                  <Divider />
                  <Center>
                    <Grid templateColumns='repeat(2, 1fr)' gap='10px' margin='35px'>
                      {/*
                      <Box w="95%" borderWidth="3px" borderRadius="lg" borderColor="grey" marginBottom="15px" minWidth="700px">
                        <Flex>
                          <Text margin="10px" fontSize="md">User's Review: </Text>
                          <StarRating />
                        </Flex>
                        <Text margin="10px" fontSize="md"> User's Review of the movie</Text>
                      </Box>
                      */}
                      {getReviewList(movieTitle)}
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
