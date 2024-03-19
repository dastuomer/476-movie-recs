import * as React from "react";
import Logo from "../components/logo.js";
import TheReturnOfTheKing from "../components/movie-picture.jsx";
import NavDrawer from "@/app/components/Drawer";
import { ChakraProvider } from "@chakra-ui/react";
import StarRating from "../components/stars.js";
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

export default function Page() {
    return (
        <ChakraProvider>
            <title>Film Finder - Friend's Reviews</title>
            <Box backgroundColor="#2D3748">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <Flex>
                            <div className="col-1">
                                <a href='/'><Logo /></a>
                            </div>
                            <div className="col-10">
                                <Box w='100%' minH='1400px' borderWidth='5px' boxShadow='dark-lg' borderColor='#171923' borderRadius='lg' backgroundColor='#A0AEC0'>
                                    <div className="d-flex justify-content-center mt-4">
                                        <div>
                                            <h1>Xander's Movie Reviews</h1>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-9">
                                            <Input placeholder='Search Movies' />
                                        </div>
                                    </div>
                                    <br /><Divider /><br />
                                    <div className="row justify-content-center">
                                        <div className="col-11">
                                            <Box className="container-fluid" bg='#4A5568' w='100%' p={20} color='white' marginTop={3} borderRadius='20'>
                                                <Flex gap="20px">
                                                    <div className="col-2">
                                                        <TheReturnOfTheKing className="align-left" />
                                                        <StarRating />
                                                    </div>
                                                    <div>
                                                        <Text fontSize="25">The Lord of The Rings: The Return of The King</Text>
                                                        <Box borderColor="black" borderWidth="2px" borderRadius="5px" height="250px" width="1000px">
                                                            <Text fontSize="16" margin="10px">This movie was really good. I liked the actors, and the action is cool. Wish I could have seen butt-ass naked Gandalf though :/</Text>
                                                        </Box>
                                                    </div>
                                                </Flex><br/>
                                            </Box>
                                        </div>
                                    </div>
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