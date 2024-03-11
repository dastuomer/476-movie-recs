"use client";
import Logo from "../components/logo.js"; 
import NavDrawer from "@/app/components/Drawer";
import { ChakraProvider, Box } from "@chakra-ui/react";
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from '@chakra-ui/react'

export default function Page() {
    return (
        <ChakraProvider>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Logo />
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
                        <Box bg='#4A5568' w='100%' p={20} color='white' marginTop={3} borderRadius='20'>
                            This is box
                        </Box>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    )
}