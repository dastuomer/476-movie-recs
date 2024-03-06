// import Logo from "./components/logo.js";
// import Burger from "./components/burger.jsx";
import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Index from "./pages/index-page/index.jsx";


export default function Home() {
  return (
    <ChakraProvider>
      <Index />
    </ChakraProvider>
    // <main>
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-3">
    //         <div className="Logo p-3 fs-6 border bg-primary mt-4">
    //           <Logo />
    //         </div>
    //       </div>
    //       <div className="col-6">
    //         <p className="p-3 fs-6 border bg-primary mt-4">Search Bar Here</p>
    //         <div className="w-100"></div>
    //         <div className="p-3 fs-6 border bg-primary justify-content-center">
    //           <p className="fs-6 justify-content-center">
    //             {" "}
    //             This is where suggestions go.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="col-3">
    //         <div className="Burger p-3 fs-6 border bg-primary mt-4">
    //           <Burger />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="row justify-content-md-center mt-5">
    //       <div className="col-10 p-3 fs-6 border bg-primary">
    //         <p className="fs-1"> This is where content goes.</p>
    //       </div>
    //     </div>

    //     <div className="row justify-content-md-center">
    //       <div className="col-10 p-3 fs-6 border bg-primary">
    //         <p className="fs-6"> Recommended for you.</p>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
