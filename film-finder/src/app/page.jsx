"use client";
// import Burger from "./components/burger.jsx";
import * as React from "react";
import {useState, useEffect} from "react";
import Logo from "./components/logo.js";
import NavDrawer from "@/app/components/Drawer";
import Carousel from "react-bootstrap/Carousel";
import StarRatingStatic from "./components/star_static.js";
import Card from "react-bootstrap/Card";

import {
  ChakraProvider,
  Box,
  IconButton,
  Button,
  Input,
  InputGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Flex
} from "@chakra-ui/react";
import TheReturnOfTheKing from "./components/movie-picture.jsx";
import { SearchIcon } from "@chakra-ui/icons";
import MovieCards from "./components/MovieCards.jsx";
import SearchBar from "./components/searchBar/searchBarMain.jsx";
import { Movies } from "./components/searchBar/movies-MOCK";
import { getServerSession } from "next-auth";

export default function Page() {

  const[data,setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/movies2").then(
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
                    {/* Trying to make this search bar wider 
                    <InputGroup size="lg" w="100%" margin="15px">
                      <Input
                        placeholder="Search For a Movie"
                        size="lg"
                        w="100%"
                        borderColor="#4A5568"
                        borderWidth={1.5}
                        borderLeftRadius={50}/>
                        
                    </InputGroup>
                    */}
                    <SearchBar placeholder="Enter a movie title..." dataSet={Movies}/>
                  </div>
                  <StarRatingStatic ratingNum={5}/>
                  </Center>
                  <Tabs variant="line" colorScheme="gray" position="relative">
                    <Center>
                      <TabList>
                        <Tab>All</Tab>
                        <Tab>Comedy</Tab>
                        <Tab>Action</Tab>
                        <Tab>Drama</Tab>
                        <Tab>Horror</Tab>
                      </TabList>
                    </Center>
                    <TabPanels>
                      <TabPanel>
                        <div className="row justify-content-center">
                          <div className="col-9">
                            <Box
                              className="container-fluid"
                              bg="#4A5568"
                              w="100%"
                              p={20}
                              color="white"
                              marginTop={3}
                              borderRadius={50}
                            >



<div>
          {(typeof data.movies2 === 'undefined')?(
            <p>Loading....</p>
          ):(
            data.movies2.map ((movie2, i) => (
              <p key = {i} > {movie2} </p>
            ))
          )}
      </div>






                              <div className="row">
                                <div className="col-3">
                                  <TheReturnOfTheKing className="align-left" />
                                </div>

                                <div className="col-9 fs-3">
                                  <p className="h1">Generic movie</p>
                                  <p className="h5 mt-5">
                                    This is a plot summary This is a plot summary This is
                                    a plot summary This is a plot summary This is a plot
                                    summary This is a plot summary This is a plot summary
                                    This is a plot summary This is a plot summary This is
                                    a plot summary This is a plot summary This is a plot
                                    summary This is a plot summary This is a plot summary
                                  </p>

                                  <Button marginTop={3} borderRadius={50}>
                                    <a href='/view-my-movies'>+ Add to List</a>
                                  </Button>
                                </div>
                              </div>
                            </Box>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="row justify-content-center">
                          <div className="col-9">
                            <Box
                              className="container-fluid"
                              bg="#4A5568"
                              w="100%"
                              p={20}
                              color="white"
                              marginTop={3}
                              borderRadius={50}
                            >
                              <div className="row">
                                <div className="col-3">
                                  <TheReturnOfTheKing className="align-left" />
                                </div>

                                <div className="col-9 fs-3">
                                  <p className="h1">Comedy movie</p>
                                  <p className="h5 mt-5">
                                    This is a plot summary This is a plot summary This is
                                    a plot summary This is a plot summary This is a plot
                                    summary This is a plot summary This is a plot summary
                                    This is a plot summary This is a plot summary This is
                                    a plot summary This is a plot summary This is a plot
                                    summary This is a plot summary This is a plot summary
                                  </p>

                                  <Button marginTop={3} borderRadius={50}>
                                    <a href='/view-my-movies'>+ Add to List</a>
                                  </Button>
                                </div>
                              </div>
                            </Box>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="row justify-content-center">
                          <div className="col-9">
                            <Box
                              className="container-fluid"
                              bg="#4A5568"
                              w="100%"
                              p={20}
                              color="white"
                              marginTop={3}
                              borderRadius={50}
                            >
                              <div className="row">
                                <div className="col-3">
                                  <TheReturnOfTheKing className="align-left" />
                                </div>

                                <div className="col-9 fs-3">
                                  <p className="h1">Action movie</p>
                                  <p className="h5 mt-5">
                                    This is a plot summary This is a plot summary This is
                                    a plot summary This is a plot summary This is a plot
                                    summary This is a plot summary This is a plot summary
                                    This is a plot summary This is a plot summary This is
                                    a plot summary This is a plot summary This is a plot
                                    summary This is a plot summary This is a plot summary
                                  </p>

                                  <Button marginTop={3} borderRadius={50}>
                                    <a href='/view-my-movies'>+ Add to List</a>
                                  </Button>
                                </div>
                              </div>
                            </Box>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="row justify-content-center">
                          <div className="col-9">
                            <Box
                              className="container-fluid"
                              bg="#4A5568"
                              w="100%"
                              p={20}
                              color="white"
                              marginTop={3}
                              borderRadius={50}
                            >
                              <div className="row">
                                <div className="col-3">
                                  <TheReturnOfTheKing className="align-left" />
                                </div>

                                <div className="col-9 fs-3">
                                  <p className="h1">Drama movie</p>
                                  <p className="h5 mt-5">
                                    This is a plot summary This is a plot summary This is
                                    a plot summary This is a plot summary This is a plot
                                    summary This is a plot summary This is a plot summary
                                    This is a plot summary This is a plot summary This is
                                    a plot summary This is a plot summary This is a plot
                                    summary This is a plot summary This is a plot summary
                                  </p>

                                  <Button marginTop={3} borderRadius={50}>
                                    <a href='/view-my-movies'>+ Add to List</a>
                                  </Button>
                                </div>
                              </div>
                            </Box>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="row justify-content-center">
                          <div className="col-9">
                            <Box
                              className="container-fluid"
                              bg="#4A5568"
                              w="100%"
                              p={20}
                              color="white"
                              marginTop={3}
                              borderRadius={50}
                            >
                              <div className="row">
                                <div className="col-3">
                                  <TheReturnOfTheKing className="align-left" />
                                </div>

                                <div className="col-9 fs-3">
                                  <p className="h1">Horror movie</p>
                                  <p className="h5 mt-5">
                                    This is a plot summary This is a plot summary This is
                                    a plot summary This is a plot summary This is a plot
                                    summary This is a plot summary This is a plot summary
                                    This is a plot summary This is a plot summary This is
                                    a plot summary This is a plot summary This is a plot
                                    summary This is a plot summary This is a plot summary
                                  </p>

                                  <Button marginTop={3} borderRadius={50}>
                                    <a href='/view-my-movies'>+ Add to List</a>
                                  </Button>
                                </div>
                              </div>
                            </Box>
                          </div>
                        </div>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>{" "}
                  <div className="row justify-content-center">
                    <div className="col-9">
                      <p className="h1 mt-4">Recommended for you</p>
                      <div data-interval="false">
                        {" "}
                        <Carousel>
                          <Carousel.Item color="blue">
                            <MovieCards />
                          </Carousel.Item>
                          <Carousel.Item>
                            <MovieCards />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
              <div className="col-1">
                <NavDrawer/>
              </div>
            </Flex>
          </div>
        </div>
      </Box >
    </ChakraProvider >
  );
}
