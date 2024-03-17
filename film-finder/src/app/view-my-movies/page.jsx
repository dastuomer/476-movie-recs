"use client";
import * as React from "react";
import Logo from "../components/logo.js";
import StarRating from "../components/stars.js";
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
  Tab,
  TabList,
  TabPanels,
  Tabs,
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
                <Center>
                  <Input size="lg" variant="outline" margin="50px" placeholder="Search your movies"/>
                </Center>
                <Tabs isFitted variant='solid-rounded' colorScheme='blue' margin='2px'>
                  <TabList mb='1em'>
                    <Tab>All</Tab>
                    <Tab>Comedy</Tab>
                    <Tab>Action</Tab>
                    <Tab>Drama</Tab>
                    <Tab>Horror</Tab>
                  </TabList>
                  <Divider/>
                  <TabPanels>
                    <TabPanel>
                      <div>
                        <Text colorScheme='blue' fontSize="45" >My Movies </Text>
                        <br/>
                      </div>
                      <Box borderWidth="2px" borderColor="grey" borderRadius="lg" minHeight="850px">
                        <Grid templateColumns='repeat(6, 1fr)' gap='10px' margin='15px'>
                          <Image width='200px' height='250px' objectFit='cover' src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Etx-JkqJ5fGz9DnwLVlzNA.jpeg"></Image>
                          <div>
                            <Text fontSize={25} >V For Vendetta</Text>
                            <Text> - Action, Horror, Comedy</Text>
                            <StarRating />
                            <Button colorScheme='blue' margin='5px' pos='absolute' > <Link href="review-my-movie">Reviews</Link></Button>
                          </div>
                          <Image width='200px' height='250px' objectFit='cover' src="https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL59DS/image?locale=en-ie&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg"></Image>
                          <div>
                            <Text fontSize={25} >The Green Mile</Text>
                            <Text> - Action, Horror, Comedy</Text>
                            <StarRating />
                            <Button colorScheme='blue' margin='5px' pos='absolute'> <Link href="review-my-movie">Reviews</Link></Button>
                          </div>
                          <Image width='200px' height='250px' objectFit='cover' src="https://i.ebayimg.com/images/g/uHoAAOSw5yxjhNAI/s-l500.jpg"></Image>
                          <div>
                            <Text fontSize={25} >Contact</Text>
                            <Text> - Action, Horror, Comedy</Text>
                            <StarRating />
                            <Button colorScheme='blue' margin='5px' pos='absolute'> <Link href="review-my-movie">Reviews</Link></Button>
                          </div>
                          <Image width='200px' height='250px' objectFit='cover' src="https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"></Image>
                          <div>
                            <Text fontSize={25} >Pirates of The Caribbean: The Curse of The Black Pearl</Text>
                            <Text> - Action, Horror, Comedy</Text>
                            <StarRating />
                            <Button colorScheme='blue' margin='5px' pos='absolute'> <Link href="review-my-movie">Reviews</Link></Button>
                          </div>
                          <Image width='200px' height='250px' objectFit='cover' src="https://images.squarespace-cdn.com/content/v1/5435f72ae4b09dbd92eb43ad/1585767951967-KP1BCETVEEQJ6WD7QOLQ/Hobbit+movie.jpg"></Image>
                          <div>
                            <Text fontSize={25} >The Hobbit: An Unexpected Journey</Text>
                            <Text> - Action, Horror, Comedy</Text>
                            <StarRating />
                            <Button colorScheme='blue' margin='5px' pos='absolute'> <Link href="review-my-movie">Reviews</Link></Button>
                          </div>
                          <Image width='200px' height='250px' objectFit='cover' src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p629_p_v8_af.jpg"></Image>
                          <div>
                            <Text fontSize={25} >Monty Python and The Holy Grail</Text>
                            <Text> - Action, Horror, Comedy</Text>
                            <StarRating />
                            <Button colorScheme='blue' margin='5px' pos='absolute'> <Link href="review-my-movie">Reviews</Link></Button>
                          </div>
                        </Grid>
                      </Box>
                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                  </TabPanels>
                </Tabs>
                
                
                
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