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
//import { StarIcon } from '@chakra-ui/icons'

export default function Page() {
  return (
    <ChakraProvider>
      <title>Film Finder - Review Movie</title>
      <Box backgroundColor="#2D3748">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <Flex>
              <div className="col-1">
                <a href='/'><Logo/></a>
              </div>
            <div className="col-10">
              <Box w='100%' minH='1400px' borderWidth='5px' boxShadow='dark-lg' borderColor='#171923' borderRadius='lg' backgroundColor='#A0AEC0'>
                <Center>
                    <Text fontSize="5xl" as="b">Movie Reviews</Text>
                </Center>
                <Image boxSize='600px' w='100%' borderBottom='5px' borderColor='black' objectFit='cover' filter='auto' src='https://m.media-amazon.com/images/S/pv-target-images/a01a95f5ccf69d4946bc47259a10f7fa9b5368963870bfe37c3c2f314e50ee2d._SX1080_FMjpg_.jpg'></Image>
                <div>
                    <Text fontSize='4xl' margin="15px" marginLeft="30px" as="u"> V For Vendetta </Text>

                </div>
                <br/><br/>
                <Flex>
                  <Text marginLeft="175px" marginRight="10px" fontSize={20}>Rating:</Text>
                  <StarRating />
                </Flex>
                <Center>
                    <Textarea w="75%" outlineColor="black" minHeight="200px" placeholder="Write your review!"></Textarea>



                </Center>
                <Button colorScheme='blue' margin='15px' marginLeft="1070"> <Link href="view-my-movies">Submit Review</Link></Button>
                <br/><br/>
                <Divider/>
                <Center>
                <Grid templateColumns='repeat(2, 1fr)' gap='10px' margin='35px'>
                    <Box w="95%" borderWidth="3px" borderRadius="lg" borderColor="grey" marginBottom="15px">
                        <Flex>
                          <Text margin="10px" fontSize="md">Muck's Review: </Text>
                          <StarRating />
                        </Flex>
                        <Text margin="10px" fontSize="md">Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually </Text>
                    </Box>


                    <Box w="95%" borderWidth="3px" borderRadius="lg" borderColor="grey" marginBottom="15px">
                        <Flex>
                          <Text margin="10px" fontSize="md">Muck's Review: </Text>
                          <StarRating />
                        </Flex>
                        <Text margin="10px" fontSize="md">Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually </Text>
                    </Box>
                  </Grid>
                </Center>
                <Center>
                    <Button colorScheme='blue' margin='15px' > <Link href="view-my-movies">View Movies</Link></Button>
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
