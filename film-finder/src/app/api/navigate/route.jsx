"use server";
import React from "react";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

const CheckLogin = (sess) => {
    //Checks if user is logged in already and directs to profile automatically if true
    if (!sess) {
        redirect("/");
    }
}
export default CheckLogin;