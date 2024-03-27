//File for storing the session variable in every page
"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;