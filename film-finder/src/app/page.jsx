"use client";
// import Burger from "./components/burger.jsx";
import * as React from "react";
import Logo from "./components/logo.js";

import NavDrawer from "@/app/components/Drawer";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Page() {
  return (
    <ChakraProvider>
      <NavDrawer />
      <Logo />
      <ul>
        <h2>Dastu:</h2>
        <li>
          <Link href="/">Home</Link>
        </li>
        <h2>Nabeera:</h2>
        <li>
          <Link href="login">Login Page</Link>
        </li>
        <li>
          <Link href="signup">Signup Page</Link>
        </li>
        <h2>Alex:</h2>
        <li>
          <Link href="view-friend-review">Friend Review Page</Link>
        </li>
        <li>
          <Link href="blender">Blend Page</Link>
        </li>
        <h2>Maxx:</h2>
        <li>
          <Link href="review-my-movie">Review a movie Page</Link>
        </li>
        <li>
          <Link href="view-my-movies">My movies Page</Link>
        </li>
        <h2>Xander:</h2>
        <li>
          <Link href="profile">Edit my profile Page</Link>
        </li>
      </ul>
    </ChakraProvider>
  );
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
}
