"use client";
// import Burger from "./components/burger.jsx";
import * as React from "react";
import Logo from "./components/logo.js";
import NavDrawer from "@/app/components/Drawer";
import Carousel from "react-bootstrap/Carousel";
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
} from "@chakra-ui/react";
import TheReturnOfTheKing from "./components/movie-picture.jsx";
import { SearchIcon } from "@chakra-ui/icons";
import MovieCards from "./components/MovieCards.jsx";

export default function Page() {
  return (
    <ChakraProvider>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Logo />
          </div>
          <div className="justify-content-center col-6 mt-4">
            <div>
              {/* Trying to make this search bar wider */}
              <InputGroup size="lg" w="100%">
                <Input
                  placeholder="Search Reviews"
                  size="lg"
                  w="100%"
                  borderColor="#4A5568"
                  borderWidth={1.5}
                  borderLeftRadius={50}
                />
                <IconButton
                  aria-label="Search database"
                  icon={<SearchIcon />}
                />
              </InputGroup>
            </div>
          </div>

          <div className="col-3">
            <NavDrawer />
          </div>
        </div>
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
                    <div className="row">
                      <div className="col-3">
                        <TheReturnOfTheKing className="align-left" />
                      </div>

                      <div className="col-9 fs-3">
                        <p class="h1">Generic movie</p>
                        <p class="h5 mt-5">
                          This is a plot summary This is a plot summary This is
                          a plot summary This is a plot summary This is a plot
                          summary This is a plot summary This is a plot summary
                          This is a plot summary This is a plot summary This is
                          a plot summary This is a plot summary This is a plot
                          summary This is a plot summary This is a plot summary
                        </p>

                        <Button marginTop={3} borderRadius={50}>
                          + Add to List
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
                          + Add to List
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
                          + Add to List
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
                          + Add to List
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
                          + Add to List
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
      </div>
    </ChakraProvider>
  );
}
