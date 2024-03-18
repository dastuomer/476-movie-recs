import Logo from "../components/logo.js"; 
import TheReturnOfTheKing from "../components/movie-picture.jsx"; 
import NavDrawer from "@/app/components/Drawer";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export default function Page() {
    return (
        <ChakraProvider>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Logo />
                    </div>

                    <div className="d-flex justify-content-center col-6 mt-4">
                        <div>
                            <h1>Xander's Movies</h1>
                        </div>
                    </div>

                    <div className="col-3">
                        <NavDrawer />
                    </div>
                </div>

                <div className="row justify-content-center"> 
                    <div className="col-3">
                       <Input placeholder='Search Reviews'/>
                    </div>
                </div>

                <div className="row justify-content-center"> 
                    <div className="col-9">
                        <Box className="container-fluid" bg='#4A5568' w='100%' p={20} color='white' marginTop={3} borderRadius='20'>
                            <div className="row">
                                <div className="col-3">
                                    <TheReturnOfTheKing className="align-left"/>

                                    <div className="fs-1">
                                        <StarIcon color='gold'/>
                                        <StarIcon color='gold'/>
                                        <StarIcon color='gold'/>
                                        <StarIcon color='gold'/>
                                        <StarIcon />
                                    </div>
                                </div>

                                <div className="col-9 fs-3">
                                    <p>This movie was really good. I liked the actors, and the action is cool. Wish I could have seen butt-ass naked Gandalf though :/ </p>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    )
}