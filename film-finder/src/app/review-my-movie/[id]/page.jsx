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
  Heading,
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { getServerSession } from "next-auth"
import { getMovieInfo } from "../../view-my-movies/page.jsx";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import StarRatingStatic from "@/app/components/star_static.js";

//Function to iterate over array so movie info can be shown correctly
function iterateArray(arr) {
  var items = "";
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      items += arr[i] + ", ";
    }
    if (items.length > 0) {
      return items.substring(0, items.length - 2);
    }
    return items;
  }
  return arr;
}

//Function for getting the info of the current user, uses session variable to determine this
export const getUserInfo = async (e) => {
  try {
    //Sends request to /api/userinfo, will get the entire user object from the DB
    const res = await fetch(`http://localhost:3000/api/userinfo?request=${e}`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Could not get user");
    }
    //Convert the user object to be readable and return it
    const convert = JSON.parse(JSON.stringify(await res.json()));
    console.log(convert)
    return await convert;
  } catch (err) {
    console.log("Error:", err);
  }
}

//Function that displays all of the movie info on the page
async function getSessionMovieInfo(movieID) {
  //Calls getMovieInfo in order to get the movie object from the DB
  const MInfo = await getMovieInfo(movieID);
  //Sets variables for all info used from the movie object
  const title = MInfo.movieInfo.title;
  const genres = MInfo.movieInfo.genres;
  const stars = Math.round(MInfo.movieInfo.imdb.rating / 2.0);
  const poster = MInfo.movieInfo.poster;
  const plot = MInfo.movieInfo.plot;
  const year = MInfo.movieInfo.year;
  const rated = MInfo.movieInfo.rated;
  const directors = MInfo.movieInfo.directors;
  const actors = MInfo.movieInfo.cast;

  //Pushes the movie poster into the page, uses the link in the movie database entry
  let gridItmes = []
  gridItmes.push(
    <GridItem rowSpan={4} colSpan={2}>
      <Box width='350px' height='504px' borderWidth="2px" borderColor="#171923" margin="20px" marginLeft="40px">
        <Image width='350px' height='500px' objectFit='cover' src={poster}></Image>{/*Movie poster URL*/}
      </Box>
    </GridItem>
  )
  //Pushes all relevant movie info onto the page, uses info from the movie database entry
  gridItmes.push(
    <GridItem rowSpan={3} colSpan={3}>
      <Heading fontSize='6xl' > {title} </Heading>{/*Movie Title*/}
      <Text fontSize="xl" >{iterateArray(genres)}, {year}, {rated}</Text>{/*Movie Genres*/}
      <Text fontSize="xl" >{plot}</Text>{/*Plot*/}
      <br></br>
      <Text fontSize="xl" >Directors: {iterateArray(directors)}</Text>{/*Plot*/}
      <Text fontSize="xl" >Actors: {iterateArray(actors)}</Text>{/*Plot*/}
      <Flex marginTop="40px" >
        <Text fontSize={20}>IMDB Movie Rating:</Text>
        <StarRatingStatic ratingNum={stars} />{/*Inputted Movie Rating*/}
      </Flex>
    </GridItem>
  )
  gridItmes.push(title)
  return (gridItmes);
};

//Function to get the individual user reviews from the database to display on the page
async function getReviewList(movieID) {
  let reviewsUserList = []
  //Gets the list of all users who have reviewed a movie
  const RUInfo = await getReviewUsersList(movieID)

  //Creates an array with all of the neccessary user reviews
  for (let x = 0; x < RUInfo.userEmailList.length; x++) {
    reviewsUserList.push(RUInfo.userEmailList[x].userEmail)
  }

  //Will go through all of the user reviews, get relevant info, and put it on the page
  const reviewsArray = [];
  for (let i = 0; i < reviewsUserList.length; i++) {
    //Gets the info of each movie review
    const RInfo = await getReviewInfo(movieID, reviewsUserList[i])
    //Sets the info to varaibles for use on the website
    const username = RInfo.reviewInfo.username
    const stars = RInfo.reviewInfo.rating
    const review = RInfo.reviewInfo.review

    //Pushes info to the page so reviews are visisble, uses the info from RInfo
    reviewsArray.push(
      <Box w="100%" borderWidth="5px" borderRadius="lg" borderColor="#171923" marginBottom="15px" minWidth="700px">
        <Flex margin="3px">
          <Text margin="5px" fontSize="md">{username}'s Review: </Text>{/*Username of reviewer*/}
          <StarRatingStatic ratingNum={stars} />{/*Reviewr's rating of the movie*/}
        </Flex>
        <Text margin="8px" fontSize="md">{review}</Text>{/*Review text*/}
      </Box>
    )
  }
  console.log("#### DONE ####")
  return reviewsArray;
};

//Gets the list of users who have reviewed a certain movie
const getReviewUsersList = async (movieID) => {
  try {
    //Will send a request to the route file located in /api/reviewMovieAPI, sends the movie ID as a parameter
    const res = await fetch(`http://localhost:3000/api/reviewMovieAPI?id=${movieID}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error("Failed to fetch review user info");
    }
    //Converts into readable data and returns it
    const myJSON = JSON.parse(JSON.stringify(await res.json()));
    console.log(myJSON)
    return await myJSON;
  } catch (error) {
    console.log("Error loading review user info: ", error);
  }
};

//Gets all of the reviews for a spesific movie
const getReviewInfo = async (movieID, reviewsUserListEmail) => {
  try {
    //Sends a request to the route file in /api/reviewMovieAPI and sends both the movie ID and user emails as parameters
    const res = await fetch(`http://localhost:3000/api/reviewMovieAPI?id=${movieID}&email=${reviewsUserListEmail}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("failed to fetch review info");
    }
    //Converts the request into readable data and returns it
    const myJSON = JSON.parse(JSON.stringify(await res.json()));
    console.log(myJSON)
    return await myJSON;
  } catch (error) {
    console.log("Error loading review info: ", error);
  }
};

//Main page
export default async function Page({ params }) {
  //Redirects user if not logged in
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  //Gets user info for the page
  const { info } = await getUserInfo(session.user.email);

  const movieID = await params.id
  let grid = await getSessionMovieInfo(movieID)
  //Sets up a variable to pass into the edit review page
  const reviewInfo = { email: info.email, username: info.username, title: grid[2], movieID: movieID };
  grid[2] = ''
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
                    {/*Displays the movie info on the page*/}
                    {grid}
                    <GridItem rowSpan={2} colSpan={4}>
                      {/*Button that directs the user to the edit review page, passes info of the movie to the page*/}
                      <Button colorScheme='blue' > <Link href={`/edit-review/${new URLSearchParams(reviewInfo).toString()}`}>Write a Review</Link></Button>
                    </GridItem>
                  </Grid>
                  <Divider />
                  <Center>
                    <Heading fontSize='4xl' >User Reviews</Heading>
                  </Center>
                  <Center>
                    <Grid templateColumns='repeat(2, 1fr)' gap='10px' margin='20px'>
                      {/*Calls function that populates page with all movie reviews*/}
                      {await getReviewList(movieID)}
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
