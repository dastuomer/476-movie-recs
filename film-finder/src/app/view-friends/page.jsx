import * as React from "react";
import Logo from "../components/logo.js";
import NavDrawer from "@/app/components/Drawer";
import {
  Button,
  Text,
  Box,
  Center,
  Link,
  Image,
  Grid,
  Flex,
  Heading,
  GridItem,
  Divider
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { redirect } from "next/navigation.js"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"

//Function that gets the info of the current user
const getUserInfo = async(e) => {
    try {
        //Sends a request to the route file at /aip/userinfo, will return an object with all of the user info in it
        const res = await fetch(`http://localhost:3000/api/userinfo?request=${e}`, {cache: "no-store"});
        if (!res.ok)
        {   
            throw new Error("Could not get user");
        }
        //Converts the request into readable data and returns it
        const convert = JSON.parse(JSON.stringify(await res.json()));
        return await convert;
    } catch (err) {
        console.log("Error:", err);
    }
}

//Function that gets the info of a friend by using their username as a parameter
const getFriendInfo = async(e) => {
    try {
      //Sends a request to the route file at /aip/userinfo, will return an object with all of the friend's info in it
        const res = await fetch(`http://localhost:3000/api/friendinfo?request=${e}`, {cache: "no-store"});
        if (!res.ok)
        {   
            throw new Error("Could not get user");
        }
        //Converts the request into readable data and returns it
        const convert = JSON.parse(JSON.stringify(await res.json()));
        return await convert;
    } catch (err) {
        console.log("Error:", err);
    }
}

//Function that will get all the friends a user has and displays them on the page, takes an array of friends as a parameter
async function getFriends(friends) {
    const friendArray = [];
    //Iterates through the array of friends and displays the friend on the page
    for (let i = 0; i < friends.length; i++) {
        //Gets the info of a friend at the current index of the friends list
        const finfo = await getFriendInfo(friends[i]);
        //Pushes the current friend's info onto the page, gets the info from the finfo variable
        friendArray.push(
        <div>
            <Grid templateRows="repeat(4, 1fr)" templateColumns="repeat(6, 1fr)" margin="5px">
            <GridItem rowSpan={4} colSpan={1}>
                <Image borderRadius='full' boxSize='250px' borderColor='black' src = {finfo.pfp}></Image>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Heading as='u' margin="5px">{finfo.username}</Heading>
            </GridItem>
            <GridItem colSpan={4} rowSpan={1}>
                {/*Takes the user to a clone of the profile page that uses the friend's info in order to see the friend's profile page*/}
                <Button colorScheme='blue' marginLeft="10px" size="md"> <Link href={`/view-friend-profile/${finfo.email}`}>View Profile</Link></Button>
                <Button colorScheme='blue' marginLeft="10px" size="md"> <Link href={`/view-friend-review/${finfo.email}`}>View Reviews</Link></Button>
            </GridItem>
            <GridItem colSpan={3} rowSpan={2}>
                <Text margin="5px">{finfo.bio}</Text>
            </GridItem>
            </Grid>
            <Divider colorScheme="black" size="lg"/>
        </div>
      )
    }
    return friendArray;
  }

export default async function Page() {
    //Checks to see if the user is logged in, reroutes to main page if not
    const session = await getServerSession(authOptions); 
    if (!session){
        redirect("/");
    }
    //Gets info of current user
    const {info} = await getUserInfo(session.user.email);
  return (
    <ChakraProvider>
      <title>Film Finder - View Friends</title>
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
                    <Heading colorScheme='blue' fontSize="45" marginTop="30px">My Friends</Heading>
                  </Center>
                  <div>
                    <br />
                  </div>
                  <Box borderWidth="2px" borderColor="#171923" minHeight="850px">
                      {/*Calls the function that displays the current user's friends, passes in an array of all user friends*/}
                      {await getFriends(info.friends)}
                  <Center>
                    {/*Link to page where the user can add more friends or remove them*/}
                    <Button colorScheme='blue' size="md"> <Link href={`/edit-friends/${info.email}`}>Add/Remove Friends</Link></Button>
                  </Center>
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
