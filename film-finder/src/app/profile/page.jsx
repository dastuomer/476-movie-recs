import * as React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
  Textarea,
  WrapItem,
  Container, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'

export default function Page() {
    return (
        <ChakraProvider>
            <Center>
                <Box maxW='lg' borderWidth='3px' borderRadius='lg' overflow='hidden' backgroundColor={'grey'}>
                    <Circle margin='5px'>
                        <Avatar size='lg' src = 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'>
                            <AvatarBadge boxSize="1.25em" bg="green.800" />
                        </Avatar>   
                    </Circle>      
                    <Heading fontSize="4xl" align={"center"}>
                        User Name
                    </Heading>
                    <Box borderWidth='3px' borderRadius='lg' margin='5px' borderColor={'black'}>
                        <Text fontSize="xl" align={"center"} margin='3px'> 
                            User Bio Goes Here.
                        </Text>
                    </Box>
                </Box>
            </Center>
        </ChakraProvider>
        
    )
}