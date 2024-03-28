"use client"
import * as React from "react";
import { useEffect, useState } from "react";
import Logo from "./components/logo.js";
import NavDrawer from "@/app/components/Drawer";
import Carousel from "react-bootstrap/Carousel";

import {
  ChakraProvider,
  Box,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import SearchBar from "./components/searchBar/searchBarMain.jsx";

export default function Page() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/plot_recommend").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }

    )
  }, [])

  return (
    <ChakraProvider>
      <title>Film Finder - Home Page</title>
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
                    <div className="col-10">
                      <SearchBar />
                    </div>
                  </Center>
                  <div className="row justify-content-center">
                    <div className="col-9">
                      <Box
                        className="container-fluid"
                        bg="#4A5568"
                        w="100%"
                        p={20}
                        minHeight="525px"
                        marginTop={3}
                        borderRadius={50}
                      >

                        <Center>
                          <Text fontSize="7xl" as="b">Search for a movie here!</Text>
                        </Center>
                        <Center marginTop="15px">
                          <Text fontSize="2xl">Find a movie you love, post a review, add friends, and even read their reviews!</Text>
                        </Center>
                        <Center marginTop="170px">
                          <Text fontSize="2xl" as="b">Search for a movie and get AI-generated movie recommendations below!</Text>
                        </Center>

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
      </Box >
    </ChakraProvider >
  );
}
