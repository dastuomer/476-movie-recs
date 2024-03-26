import * as React from "react";
import Logo from "../components/logo.js";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Button,
  IconButton,
  Input,
  useDisclosure,
  Avatar,
  AvatarBadge,
  HStack,
  Stack,
  Text,
  Box,
  Center,
  Circle,
  Heading,
  Link,
  Image,
  Grid,
  Textarea,
  WrapItem,
  Container, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  extendTheme,
  ColorModeScript,
  Flex
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import NavDrawer from "@/app/components/Drawer";
import { redirect } from "next/navigation.js"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"

const getUserInfo = async(e) => {
    try {
        const res = await fetch(`http://localhost:3000/api/userinfo?request=${e}`, {cache: "no-store"});
        if (!res.ok)
        {   
            throw new Error("Could not get user");
        }

        const convert = JSON.parse(JSON.stringify(await res.json()));
        return await convert;
    } catch (err) {
        console.log("Error:", err);
    }
}

const Profile = async() => {
    const session = await getServerSession(authOptions); 
    if (!session){
        redirect("/");
    }
    const {info} = await getUserInfo(session.user.email);
    
    return (
        <ChakraProvider>
            <title>Film Finder - User Profile</title>
            <Box backgroundColor="#2D3748">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <Flex>
                            <div className="col-1">
                                <a href='/'><Logo/></a>
                            </div>
                      <div className="col-10">  
                        <Box w='100%' minH='1400px' borderWidth='5px' boxShadow='dark-lg' borderColor='#171923' borderRadius='lg' backgroundColor='#A0AEC0'>
                        <Text pos='absolute' textColor='white' backdropFilter='auto' backdropBlur='10px' fontSize = "3xl" zIndex='1'>Favourite Movie: {!session? (" "):(info.favmovie)}</Text>
                        {!session? (<Image boxSize='400px' w='100%' borderBottom='5px' borderColor='black' objectFit='cover' filter='auto' src='https://m.media-amazon.com/images/S/pv-target-images/706d70385bb0d8ca7c350a00336616229c320b6420b7f23a3bded803bb56e22a.jpg'></Image>):
                        (<Image boxSize='400px' w='100%' borderBottom='5px' borderColor='black' objectFit='cover' filter='auto' src={info.banner}></Image>)}
                        <Center>
                            {!session? (<Image borderRadius='full' boxSize='200px' borderColor='black' margin='-100px' zIndex='1' boxShadow='dark-lg' src = 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'></Image>):
                            (<Image borderRadius='full' boxSize='200px' borderColor='black' margin='-100px' zIndex='1' boxShadow='dark-lg' src = {info.pfp}></Image>)}  
                        </Center> 
                        <Center>
                            {!session? (<Heading fontSize="4xl" mt='100px'>Placeholder</Heading>):(<Heading fontSize="4xl" mt='100px'>{info.username}</Heading> )}   
                        </Center>
                            <Center>
                                <Box w='50%'>
                                    {!session? (<Text fontSize="xl" margin='3px' align={"center"}>Bio</Text>):(<Text fontSize="xl" margin='3px' align={"center"}>{info.bio}</Text>)}
                                </Box>
                            </Center>
                            <Flex>
                                <Button colorScheme='blue' margin='5px' algin="" size='md'> <Link href="view-my-movies">View Movies</Link></Button>
                                <Button colorScheme='blue' margin='5px' algin="" size='md'> <Link href={`/edit-profile/${info.email}`}>Edit Profile Page</Link></Button>
                            </Flex>
                            <Divider />
                            <Tabs isFitted variant='solid-rounded' colorScheme='blue' margin='2px'>
                            <TabList mb='1em'>
                                <Tab>Genres</Tab>
                                <Tab>Favourite Actor</Tab>
                                <Tab>Favourite Director</Tab>
                                <Tab>Favourite Soundtrack</Tab>
                                <Tab>Favourite Characters</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                <Text>Favourite Genres: {!session? (" "):(info.genres)}</Text>
                                </TabPanel>
                                <TabPanel>
                                <Box border='solid' borderColor='#171923'>
                                    <Text pos='absolute' textColor='white' backdropFilter='auto' backdropBlur='10px'>Favourite Actor</Text>
                                    {!session? (<Image width='100%' height='700px' objectFit='cover' src='https://www.giantfreakinrobot.com/wp-content/uploads/2021/11/tom-hardy-mad-max.jpg'></Image>):(<Image width='100%' height='700px' objectFit='cover' src={info.character}></Image>)}
                                </Box>
                                </TabPanel>
                                <TabPanel>
                                <Box border='solid' borderColor='#171923'>
                                    <Text pos='absolute' textColor='white' backdropFilter='auto' backdropBlur='10px'>Favourite Director</Text>
                                    {!session? (<Image width='100%' height='700px' objectFit='cover' src='https://static01.nyt.com/images/2020/01/05/arts/05martin-scorsese3/05martin-scorsese3-facebookJumbo.jpg?year=2020&h=550&w=1050&s=0f5a5899d5c57e3c87edbc90e8b8228d7cbefa0f663d4992e768874ce09cd2f4&k=ZQJBKqZ0VN'></Image>):(<Image width='100%' height='700px' objectFit='cover' src={info.character}></Image>)}
                                </Box>
                                </TabPanel>
                                <TabPanel>
                                <Box border='solid' borderColor='#171923'>
                                    <Text pos='absolute' textColor='white' backdropFilter='auto' backdropBlur='10px'>Favourite Soundtrack</Text>
                                    {!session? (<Image width='100%' height='700px' objectFit='cover' src='https://ninamunteanudotnet.files.wordpress.com/2023/05/gargantua-black-hole.jpg'></Image>):(<Image width='100%' height='700px' objectFit='cover' src={info.character}></Image>)}
                                </Box>
                                </TabPanel>
                                <TabPanel>
                                <Box border='solid' borderColor='#171923'>
                                    <Text pos='absolute' textColor='white' backdropFilter='auto' backdropBlur='10px'>Favourite Character</Text>
                                    {!session? (<Image width='100%' height='700px' objectFit='cover' src='https://miro.medium.com/v2/resize:fit:1400/1*f4tWL0qzHK7tYK1XCNlTHA.jpeg'></Image>):(<Image width='100%' height='700px' objectFit='cover' src={info.character}></Image>)}
                                </Box>
                                </TabPanel>
                            </TabPanels>
                            </Tabs>
                            <Divider />
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
export default Profile;