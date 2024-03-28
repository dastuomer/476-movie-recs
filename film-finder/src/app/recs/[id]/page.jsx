"use client"
import * as React from "react";
import Logo from "@/app/components/logo.js";
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
import MovieCards from "@/app/components/MovieCards.jsx";
import SearchBar from "@/app/components/searchBar/searchBarMain.jsx";
import StarRatingStatic from "@/app/components/star_static.js";

export default function Page({ params }) {
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

    const gotten = JSON.parse(decodeURIComponent(JSON.stringify(params)));
    const midstep = gotten.id;
    const convert = new URLSearchParams(midstep);
    const movieId = convert.get("movieId");
    const Poster = convert.get("poster")
    const Title = convert.get("title");
    const Plot = convert.get("plot");
    const Rating = convert.get("rating");

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
                                                <div className="row">
                                                    <div className="col-3">
                                                        <Box borderWidth="3px" borderColor="#171923" minHeight="300px">
                                                            <Image width="100%" height="100%" objectFit='cover' src={Poster}></Image>
                                                        </Box>
                                                        <Button marginTop={5} borderRadius={50}>
                                                            <a href={`/review-my-movie/${movieId}`}>+ Review Movie</a>
                                                        </Button>
                                                    </div>

                                                    <div className="col-9 fs-3">
                                                        <p className="h1" as="u">{Title}</p>
                                                        <p className="h4 mt-5">
                                                            {Plot}
                                                        </p>
                                                        <div className="h3 mt-5">
                                                            <span> IMDb Rating: <StarRatingStatic ratingNum={Rating} /> </span>
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
                                <NavDrawer />
                            </div>
                        </Flex>
                    </div>
                </div>
            </Box >
        </ChakraProvider >
    );
}