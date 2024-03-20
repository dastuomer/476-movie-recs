import Logo from "../components/logo.js";
import TheReturnOfTheKing from "../components/movie-picture.jsx";
import NavDrawer from "@/app/components/Drawer";
import { ChakraProvider, Box, Divider } from "@chakra-ui/react";
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from '@chakra-ui/react'

import { Text, VStack, HStack, StackDivider, Flex, Spacer, Image } from '@chakra-ui/react'

export default function Page() {
    return (
        <ChakraProvider>
            <title>Film Finder - Blender</title>
            <Box backgroundColor="#2D3748">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <Flex>
                            <div className="col-1">
                                <a href='/'><Logo /></a>
                            </div>
                            <div className="col-10">
                                <Box w='100%' minH='1400px' borderWidth='5px' boxShadow='dark-lg' borderColor='#171923' borderRadius='lg' backgroundColor='#A0AEC0'>
                                    <div className="d-flex justify-content-center mt-4 fs-1">
                                        <Editable defaultValue="" placeholder="Enter your Blend" >
                                            <EditablePreview />
                                            <EditableInput />
                                        </Editable>
                                    </div>
                                    <Divider/><br/>
                                    <VStack
                                        divider={<StackDivider borderColor='gray.200' />}
                                        spacing={4}
                                        align='stretch'>
                                        <Box bg='yellow.200'>
                                            <Flex minWidth='max-content' alignItems='center'>
                                                <Image src="/Return of Kiing.jpg" width={175} height={250} alt="Movie Pic" marginLeft="25px"/>
                                                <Spacer />
                                                <Text as='b' color='black' fontSize='40px'>Lord of the Rings: Return of the King</Text>
                                                <Spacer />
                                                <VStack spacing='10px' marginRight={10}>
                                                    <Image border='4px' borderRadius='full' boxSize='100px' borderColor='black' src='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'></Image>
                                                    <Text color='black' fontSize='28px'>Xander</Text>
                                                </VStack>
                                            </Flex>
                                        </Box>
                                        <Box bg='tomato'>
                                            <Flex minWidth='max-content' alignItems='center'>
                                                <Image src="/Dune Part 2.jpg" width={175} height={250} alt="Movie Pic" marginLeft="25px"/>
                                                <Spacer />
                                                <Text as='b' color='black' fontSize='40px'>Dune: Part Two</Text>
                                                <Spacer />
                                                <VStack spacing='10px' marginRight={10}>
                                                    <Image border='4px' borderRadius='full' boxSize='100px' borderColor='black' src='https://i.etsystatic.com/22467704/r/il/61cafa/3465473749/il_fullxfull.3465473749_i8th.jpg'></Image>
                                                    <Text color='black' fontSize='28px'>Alex</Text>
                                                </VStack>
                                            </Flex>
                                        </Box>
                                    </VStack>
                                </Box>
                            </div>
                            <div classNmae="col-1">
                                <NavDrawer />
                            </div>
                        </Flex>
                    </div>
                </div>
            </Box>
        </ChakraProvider >
    )
}