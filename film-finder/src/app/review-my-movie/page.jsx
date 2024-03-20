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
                  <Flex margin="50px">
                    <Image width='400px' height='500px' objectFit='cover' margin="20px" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Etx-JkqJ5fGz9DnwLVlzNA.jpeg"></Image>
                    <Box w="55%">
                      <Text fontSize='4xl' margin="15px" marginLeft="30px" as="u"> V For Vendetta </Text>
                      <Text margin="5px" marginLeft="30px"> - Action, Horror, Comedy</Text>
                      <Flex marginTop="40px">
                        <Text marginLeft="45px" marginRight="10px" fontSize={20}>Rating:</Text>
                        <StarRating />
                      </Flex>
                      <Textarea w="100%" outlineColor="black" minHeight="200px" marginLeft="45px" placeholder="Write your review!"></Textarea>
                      <Button colorScheme='blue' margin='30px' marginLeft="55px"> <Link href="view-my-movies">Submit Review</Link></Button>
                    </Box>
                  </Flex>
                  <Divider />
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
                <NavDrawer />
              </div>
            </Flex>
          </div>
        </div>
      </Box>
    </ChakraProvider>
  )
}
