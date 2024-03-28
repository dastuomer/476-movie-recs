"use client"
import * as React from "react";
import { useEffect, useState } from "react";

import Logo from "@/app/components/logo.js";
import NavDrawer from "@/app/components/Drawer";
import Carousel from "react-bootstrap/Carousel";

import {
    ChakraProvider,
    Box,
    Center,
    Flex,
    Button,
    Image,
    Text
} from "@chakra-ui/react";
import MovieCards from "@/app/components/MovieCards.jsx";
import SearchBar from "@/app/components/searchBar/searchBarMain.jsx";
import StarRatingStatic from "@/app/components/star_static.js";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation.js"

export default function Page({ params }) {
  const {data: session} = useSession();
  const [error, setError] = useState("");
  const router = useRouter();

    const gotten = JSON.parse(decodeURIComponent(JSON.stringify(params)));
    const midstep = gotten.id;
    const convert = new URLSearchParams(midstep);
    const movieId = convert.get("movieId");
    const Poster = convert.get("poster")
    const Title = convert.get("title");
    const Plot = convert.get("plot");
    const Rating = convert.get("rating");



    const [data, setData] = useState([{}])
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/plot_recommend/${Plot}`).then(
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
                                                <div className="row">
                                                    <div className="col-3">
                                                        <Box borderWidth="3px" borderColor="#171923" minHeight="300px">
                                                            <Image width="100%" height="300px" objectFit='cover' src={Poster}></Image>
                                                        </Box>
                                                        {!session?(<Text size={25}>Log in to review</Text>):(<Button marginTop={5} borderRadius={50}>
                                                            <a href={`/review-my-movie/${movieId}`}>+ Review Movie</a>
                                                        </Button>)}
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
                                                <div>
                                                    {typeof data.plot_recommendations === 'undefined' ? (
                                                        <p>Loading....</p>
                                                    ) : (
                                                        <Carousel>
                                                            {data.plot_recommendations.map((movie, i) => (
                                                                <Carousel.Item key={i}>
                                                                    <Center>
                                                                        <div>
                                                                            <Center>
                                                                            <Image width='250px' height='400px' objectFit='cover' src={movie.poster} alt={movie.title} />{/*src = Movie Poster URL*/}
                                                                            </Center>
                                                                            <Text>{movie.title}</Text>
                                                                            <Text marginBottom={10}>Plot: {movie.plot}</Text>
                                                                        </div>
                                                                    </Center>
                                                                </Carousel.Item>
                                                            ))}
                                                        </Carousel>
                                                    )}
                                                </div>
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