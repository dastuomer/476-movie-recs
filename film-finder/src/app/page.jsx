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
  Button,
  Image
} from "@chakra-ui/react";
import MovieCards from "./components/MovieCards.jsx";
import SearchBar from "./components/searchBar/searchBarMain.jsx";
import Results from "./components/results.jsx";
import { Movies } from "./components/searchBar/movies-MOCK";
import StarRatingStatic from "./components/star_static.js";

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
                      <SearchBar placeholder="Enter a movie title..." dataSet={Movies} />
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
                        <div className="row">
                          <div className="col-3">
                            <Box borderWidth="3px" borderColor="#171923" minHeight="300px">
                              <Image width='250px' height='300px' objectFit='cover' src=""></Image>
                            </Box>
                            <Button marginTop={5} borderRadius={50}>
                              <a href='/review-my-movie'>+ Review Movie</a>
                            </Button>
                          </div>

                          <div className="col-9 fs-3">
                            <p className="h1">title</p>
                            <p className="h4 mt-5">
                              plot
                            </p>
                            <div className="h3 mt-5">
                              <span> IMDb Rating: <StarRatingStatic ratingNum={4} /> </span>
                            </div>
                          </div>

                        </div>


                      </Box>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-9">
                      <p className="h1 mt-4">Recommended for you</p>
                      <div data-interval="false">
                        {" "}
                        <div>
		{typeof data.plot_recommendations === 'undefined' ? (
			<p>Loading....</p>
		) : (
			<Carousel>
				{data.plot_recommendations.map((movie, i) => (
					<Carousel.Item key={i}>
						<div>
							<p>Title: {movie.title}</p>
							<Box borderWidth="3px" borderColor="#171923" minHeight="300px">
							<img width='250px' height='300px' objectFit='cover' src={movie.poster} alt={movie.title} />{/*src = Movie Poster URL*/}
			</Box>

							<p>Year: {movie.year}</p>
							<p>Plot: {movie.plot}</p>

							{/* Add more fields as needed */}
						</div>
					</Carousel.Item>
				))}
			</Carousel>
		)}
	</div>

                        { /*
                        <Carousel>
                          <Carousel.Item color="blue">
                            <MovieCards />
                          </Carousel.Item>
                          <Carousel.Item>
                            <MovieCards />
                          </Carousel.Item>
                        </Carousel>
    */}
                      </div>
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
