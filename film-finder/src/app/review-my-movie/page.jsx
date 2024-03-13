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
      <Box backgroundColor="#2D3748">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-6">  
              <Box w='100%' minH='1400px' borderWidth='5px' boxShadow='dark-lg' borderColor='#171923' borderRadius='lg' backgroundColor='#A0AEC0'>
                <Logo/>
                <Center>
                    <Text fontSize="5xl">Movie Reviews</Text>
                </Center>
                <Image boxSize='400px' w='100%' borderBottom='5px' borderColor='black' objectFit='cover' filter='auto' src='https://m.media-amazon.com/images/S/pv-target-images/a01a95f5ccf69d4946bc47259a10f7fa9b5368963870bfe37c3c2f314e50ee2d._SX1080_FMjpg_.jpg'></Image>
                <div>
                    <Text fontSize='3xl' margin="10px">V For Vendetta</Text>
                    *Insert stars here + small description*
                </div>
                <br/>
                <Center>
                    <Box w="95%" borderWidth="3px" borderRadius="lg" borderColor="grey" marginBottom="15px">
                        <Text margin="10px" fontSize="md">Muck's Review:  *stars*</Text>
                        <Text margin="10px" fontSize="md">Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually </Text>
                    </Box>
                </Center>
                <Center>
                    <Box w="95%" borderWidth="3px" borderRadius="lg" borderColor="grey" marginBottom="15px">
                        <Text margin="10px" fontSize="md">Muck's Review:  *stars*</Text>
                        <Text margin="10px" fontSize="md">Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually </Text>
                    </Box>
                </Center>
                <Center>
                    <Box w="95%" borderWidth="3px" borderRadius="lg" borderColor="grey" marginBottom="15px">
                        <Text margin="10px" fontSize="md">Muck's Review:  *stars*</Text>
                        <Text margin="10px" fontSize="md">Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually Zander watch the movie it's a good one actually </Text>
                    </Box>
                </Center>
                <Center>
                    <Button colorScheme='blue' margin='5px' > <Link href="view-my-movies">View Movies</Link></Button>
                </Center>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </ChakraProvider>   
  )
}