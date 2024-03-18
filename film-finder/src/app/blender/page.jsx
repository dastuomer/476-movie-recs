import Logo from "../components/logo.js"; 
import TheReturnOfTheKing from "../components/movie-picture.jsx"; 
import NavDrawer from "@/app/components/Drawer";
import { ChakraProvider, Box } from "@chakra-ui/react";
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from '@chakra-ui/react'

import { Text, VStack, HStack, StackDivider, Flex, Spacer, Image} from '@chakra-ui/react'

export default function Page() {
    return (
        <ChakraProvider>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <a href='/'><Logo/></a>
                    </div>

                    <div className="d-flex justify-content-center col-6 mt-4 fs-1">
                        <Editable defaultValue="Alex and Xander's Blend">
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
                    </div>

                    <div className="col-3">
                        <NavDrawer />
                    </div>
                </div>

                <div className="row justify-content-center"> 
                    <div className="col-9">
                        <Box className="container-fluid" bg='#4A5568' w='100%' p={20} color='white' marginTop={3} borderRadius='20'>
                            <VStack
                                divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'
                            >
                                <Box bg='yellow.200'>
                                    <Flex minWidth='max-content' alignItems='center'>
                                        <Image src="/Return of Kiing.jpg" width={175} height={250} alt="Movie Pic" />
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
                                        <Image src="/Dune Part 2.jpg" width={175} height={250} alt="Movie Pic" />
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
                </div>
            </div>
        </ChakraProvider>
    )
}