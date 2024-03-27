"use client"
import * as React from "react";
import Logo from "./components/logo.js";
import NavDrawer from "@/app/components/Drawer";
import Carousel from "react-bootstrap/Carousel";

import {
  ChakraProvider,
  Box,
  Center,
  Flex
} from "@chakra-ui/react";
import MovieCards from "./components/MovieCards.jsx";
import SearchBar from "./components/searchBar/searchBarMain.jsx";
import Results from "./components/results.jsx";
import { Movies } from "./components/searchBar/movies-MOCK";

export default function Page() {
{/*
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
*/}
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
                    <SearchBar placeholder="Enter a movie title..." dataSet={Movies}/>
                  </div>
                  </Center>
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
                        <Results/>

                              {/*
                                <div>
                                          {(typeof data.movies2 === 'undefined')?(
                                            <p>Loading....</p>
                                          ):(
                                            data.movies2.map ((movie2, i) => (
                                              <p key = {i} > {movie2} </p>
                                            ))
                                          )}
                                      </div>

                                            */}


                            </Box>
                          </div>
                        </div>

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
