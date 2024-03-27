import * as React from "react";
import Logo from "../../components/logo.js";
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
  Flex,
  GridItem,
  Heading
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import CheckLogin from "@/app/api/navigate/route.jsx"
import { getServerSession } from "next-auth"
import { getMovieInfo } from "../../view-my-movies/page.jsx";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import StarRatingStatic from "@/app/components/star_static.js";

{/*Obtain Selected Movie Title from button used*/ }
const getUserInfo = async (e) => {
  try {
    const res = await fetch(`http://localhost:3000/api/userinfo?request=${e}`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Could not get user");
    }

    const convert = JSON.parse(JSON.stringify(await res.json()));
    return await convert;
  } catch (err) {
    console.log("Error:", err);
  }
}

async function getSessionMovieInfo(MovieTitle) {
  const MInfo = await getMovieInfo(MovieTitle);

  let fields = Object.values(MInfo.movieInfo)
  const title = fields[1]
  const stars = Math.round((fields[2]) / 2.0)
  const genre = fields[3]
  const poster = fields[4]

  let gridItmes = []
  gridItmes.push(
    <GridItem rowSpan={4} colSpan={2}>
      <Box width='350px' height='500px' borderWidth="2px" borderColor="#171923" margin="20px" marginLeft="40px"> 
        <Image width='350px' height='500px' objectFit='cover' src={poster}></Image>{/*Movie poster URL*/}
      </Box>
    </GridItem>
  )
  gridItmes.push(
    <GridItem rowSpan={3} colSpan={3}>
      <Heading fontSize='6xl' > {title} </Heading>{/*Movie Title*/}
      <Text fontSize="xl" marginLeft="10px">{genre}</Text>{/*Movie Genres*/}
      <Flex marginTop="40px">
        <Text marginLeft="10px" marginRight="10px" fontSize={20}>IMDB Movie Rating:</Text>
        <StarRatingStatic ratingNum={stars} />{/*Inputted Movie Rating*/}
      </Flex>
    </GridItem>
  )
  return (gridItmes);
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
      <Box w="100%" borderWidth="5px" borderRadius="lg" borderColor="#171923" marginBottom="15px" minWidth="700px">
        <Flex margin="3px">
          <Text margin="5px" fontSize="md">{username}'s Review: </Text>{/*Username of reviewer*/}
          <StarRatingStatic ratingNum={stars} />{/*Reviewr's rating of the movie*/}
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

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const { info } = await getUserInfo(session.user.email);

  const movieTitle = params.id
  const reviewInfo = { email: info.email, username: info.username, title: movieTitle };

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
                    <Heading fontSize="5xl" as="b">Movie Reviews</Heading>
                  </Center>
                  <Divider />
                  <Grid templateRows="repeat(4, 1fr)" templateColumns="repeat(6, 1fr)">
                    {getSessionMovieInfo(movieTitle)}
                  <GridItem rowSpan={2} colSpan={4}>
                      <Button colorScheme='blue' marginLeft="10px"> <Link href={`/edit-review/${new URLSearchParams(reviewInfo).toString()}`}>Write a Review</Link></Button>{/*Submits review, Adds movie to User's movie list, and takes back to view my movies page*/}
                    </GridItem>
                  </Grid>
                  <Divider />
                  <Center>
                    <Heading fontSize='4xl' >User Reviews</Heading>
                  </Center>
                  <Center>
                    <Grid templateColumns='repeat(2, 1fr)' gap='10px' margin='20px'>
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
