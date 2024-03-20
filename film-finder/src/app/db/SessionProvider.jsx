//File used CLIENT-SIDE in order to check the current user session. Connected directly to layout.js .
"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;