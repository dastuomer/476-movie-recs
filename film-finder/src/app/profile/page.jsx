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
  TabPanel
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'

export default function Page() {
    return (
        <ChakraProvider>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                      <div className="col-6">  
                        <Box w='100%' minH='1500px' borderWidth='8px' boxShadow='dark-lg' borderColor='black' borderRadius='lg' backgroundColor={'grey'}>
                        <Text pos='absolute' textColor='white'>Favourite Movie: Lord of the Rings : Return of the King</Text>
                        <Image boxSize='400px' w='100%' borderBottom='8px' borderColor='black' objectFit='cover' src='https://m.media-amazon.com/images/S/pv-target-images/706d70385bb0d8ca7c350a00336616229c320b6420b7f23a3bded803bb56e22a.jpg'></Image>
                        <Center>
                            <Image border='8px' borderRadius='full' boxSize='200px' borderColor='black' margin='-100px' src = 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'></Image>   
                        </Center>
                            <Heading fontSize="4xl" align={"center"} mt='100px'>
                                User Name
                            </Heading>
                            <Center>
                                <Box w='50%' border='3px' margin='5px' borderColor='black'>
                                    <Text fontSize="xl" align={"center"} margin='3px'> 
                                        User Bio Goes Here. Need to decide on proper font/coloring but it should fill this kind of area.
                                    </Text>
                                    <Text fontSize="xl" align={"center"} margin='3px'> 
                                        Movies Watched: 100, more info here
                                    </Text>
                                </Box>
                            </Center>
                            <Divider />
                            <Tabs isFitted variant='solid-rounded' colorScheme='blue' margin='5px'>
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
                                <Grid templateColumns='repeat(5, 1fr)' gap='3px' margin='5px'>
                                <Image boxSize='225px' objectFit='scale-down' src='https://m.media-amazon.com/images/I/71X6YzwV0gL.jpg'></Image>
                                <Image boxSize='225px' objectFit='scale-down' src='https://i.ebayimg.com/images/g/ViAAAOSwn-Nlzmtp/s-l400.jpg'></Image>
                                <Image boxSize='225px' objectFit='scale-down' src='https://i.ebayimg.com/images/g/zu4AAOSw2spbJQ0J/s-l1600.jpg'></Image>
                                <Image boxSize='225px' objectFit='scale-down' src='https://m.media-amazon.com/images/I/61O9+6+NxYL._AC_UF894,1000_QL80_.jpg'></Image>
                                <Image boxSize='225px' objectFit='scale-down' src='https://i.ebayimg.com/images/g/plIAAOSw9L9guhlU/s-l1200.webp'></Image>
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
                                <p>Favourite Actor: Tom Hardy</p>
                                <Image boxSize='400px' objectFit='scale-down' src='https://www.giantfreakinrobot.com/wp-content/uploads/2021/11/tom-hardy-mad-max.jpg'></Image>
                                </TabPanel>
                                <TabPanel>
                                <p>Favourite Director: Martin Scorcese</p>
                                </TabPanel>
                                <TabPanel>
                                <p>Favourite Soundtrack: Interstellar</p>
                                </TabPanel>
                                <TabPanel>
                                <p>Favourite Film Character: Aragron</p>
                                <Image boxSize='400px' objectFit='scale-down' src='https://preview.redd.it/how-could-i-create-the-role-of-aragorn-class-aligment-etc-v0-1ac73cd2wk1a1.jpg?auto=webp&s=779391582ad7eefd1aed9cf3b8a5fb5e0a5b8b8d'></Image>
                                </TabPanel>
                            </TabPanels>
                            </Tabs>
                            <Divider />
                            <Center>
                                <Button colorScheme='blue' justifySelf={'center'} margin='5px'> <Link href="login">Log Out</Link></Button>
                            </Center>
                        </Box>
                      </div>
                    </div>
                </div>
        </ChakraProvider>
        
    )
}