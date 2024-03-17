"use client";
import * as React from "react";
import Logo from "../components/logo.js";
import NavDrawer from "@/app/components/Drawer";
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

export default function Page() {
    return (
        <ChakraProvider>
            <Box backgroundColor="#2D3748">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <Flex>
                        <div className="col-1">
                            <Logo/>
                        </div>
                        <div className="col-10">
                        <Box w='100%' minH='1400px' borderWidth='5px' boxShadow='dark-lg' borderColor='#171923' borderRadius='lg' backgroundColor='#A0AEC0'>
                        <Text pos='absolute' textColor='white' backdropFilter='auto' backdropBlur='10px' zIndex='1'>Favourite Movie: Lord of the Rings : Return of the King</Text>
                        <Image boxSize='400px' w='100%' borderBottom='5px' borderColor='black' objectFit='cover' filter='auto' src='https://m.media-amazon.com/images/S/pv-target-images/706d70385bb0d8ca7c350a00336616229c320b6420b7f23a3bded803bb56e22a.jpg'></Image>
                        <Center>
                            <Image borderRadius='full' boxSize='200px' borderColor='black' margin='-100px' zIndex='1' boxShadow='dark-lg' src = 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'></Image>   
                        </Center>
                            <Heading fontSize="4xl" align={"center"} mt='100px'>
                                Profile Name
                            </Heading>
                            <Center>
                                <Box w='50%'>
                                    <Text fontSize="xl" margin='3px' align={"center"}> 
                                        User Bio Goes Here. Need to decide on proper font/coloring but it should fill this kind of area. Maybe links to socials? Centered or no?
                                    </Text>
                                </Box>
                            </Center>
                            <Text fontSize="xl" margin='5px'> 
                                        Movie stats here or in some other spot?
                            </Text>
                            <Divider />
                            <Tabs isFitted variant='solid-rounded' colorScheme='blue' margin='2px'>
                            <TabList mb='1em'>
                                <Tab>Favourites</Tab>
                                <Tab>Genres</Tab>
                                <Tab>Actors</Tab>
                                <Tab>Director</Tab>
                                <Tab>Soundtrack</Tab>
                                <Tab>Characters</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                <Grid templateColumns='repeat(5, 1fr)' gap='5px' margin='5px'>
                                <Image width='200px' height='250px' objectFit='cover' src='https://m.media-amazon.com/images/I/71X6YzwV0gL.jpg'></Image>
                                <Image width='200px' height='250px' objectFit='cover' src='https://i.ebayimg.com/images/g/ViAAAOSwn-Nlzmtp/s-l400.jpg'></Image>
                                <Image width='200px' height='250px' objectFit='cover' src='https://i.ebayimg.com/images/g/zu4AAOSw2spbJQ0J/s-l1600.jpg'></Image>
                                <Image width='200px' height='250px' objectFit='cover' src='https://m.media-amazon.com/images/I/61O9+6+NxYL._AC_UF894,1000_QL80_.jpg'></Image>
                                <Image width='200px' height='250px' objectFit='cover' src='https://i.ebayimg.com/images/g/plIAAOSw9L9guhlU/s-l1200.webp'></Image>
                                <Text align='center'>1. Lord of the Rings : Return of the King</Text>
                                <Text align='center'>2. Dune 2</Text>
                                <Text align='center'>3. Interstellar</Text>
                                <Text align='center'>4. Gladiator</Text>
                                <Text align='center'> 5. Mad Max Fury Road</Text>
                                </Grid>
                                </TabPanel>
                                <TabPanel>
                                <p>Favourite Genres: Fantasy, Psychological Horror, Comedy</p>
                                </TabPanel>
                                <TabPanel>
                                <Box border='solid' borderColor='#171923'>
                                    <Text pos='absolute' textColor='white' backdropFilter='auto' backdropBlur='10px'>Favourite Actor : Tom Hardy</Text>
                                    <Image width='100%' height='400px' objectFit='cover' src='https://www.giantfreakinrobot.com/wp-content/uploads/2021/11/tom-hardy-mad-max.jpg'></Image>
                                </Box>
                                </TabPanel>
                                <TabPanel>
                                <Box border='solid' borderColor='#171923'>
                                    <Text pos='absolute' textColor='white' backdropFilter='auto' backdropBlur='10px'>Favourite Director : Martin Scorcese</Text>
                                    <Image width='100%' height='400px' objectFit='cover' src='https://static01.nyt.com/images/2020/01/05/arts/05martin-scorsese3/05martin-scorsese3-facebookJumbo.jpg?year=2020&h=550&w=1050&s=0f5a5899d5c57e3c87edbc90e8b8228d7cbefa0f663d4992e768874ce09cd2f4&k=ZQJBKqZ0VN'></Image>
                                </Box>
                                </TabPanel>
                                <TabPanel>
                                <Box border='solid' borderColor='#171923'>
                                    <Text pos='absolute' textColor='white' backdropFilter='auto' backdropBlur='10px'>Favourite Soundtrack : Interstellar</Text>
                                    <Image width='100%' height='400px' objectFit='cover' src='https://ninamunteanudotnet.files.wordpress.com/2023/05/gargantua-black-hole.jpg'></Image>
                                </Box>
                                </TabPanel>
                                <TabPanel>
                                <Box border='solid' borderColor='#171923'>
                                    <Text pos='absolute' textColor='white' backdropFilter='auto' backdropBlur='10px'>Favourite Character : Aragorn</Text>
                                    <Image width='100%' height='400px' objectFit='cover' src='https://miro.medium.com/v2/resize:fit:1400/1*f4tWL0qzHK7tYK1XCNlTHA.jpeg'></Image>
                                </Box>
                                </TabPanel>
                            </TabPanels>
                            </Tabs>
                            <Divider />
                            <Center>
                                <Button colorScheme='blue' margin='5px' pos='absolute' bottom='5px'> <Link href="login">Log Out</Link></Button>
                            </Center>
                        </Box>
                        </div>
                            <div className="col-1">
                                <NavDrawer/>
                            </div>
                        </Flex>
                    </div>
                </div>
            </Box>
        </ChakraProvider>
        
    )
}