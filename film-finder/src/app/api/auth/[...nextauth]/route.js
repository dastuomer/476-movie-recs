//This file is for authorizing login attempts.
import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/db/User";
import connect from "@/app/db/dbconnect"

export const authOptions = {
  providers: [
    //This defines a kind of login and the components of the login
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
            email: {label: "Email", type: "text"},
            username: {label: "Username", type: "text"},
            username: {label: "Password", type: "password"}
        },
        async authorize(credentials) {
            //Connect to the DB
            await connect();
            try{
                //Looks for an instance in the DB of a user with the inputed email, returns the database entry
                const user = await User.findOne({email: credentials.email})
                if (user)
                {
                    //Checks if password in DB and inputed password match
                        if (credentials.password === user.password) {
                            return user;
                        }
                }     
            }catch (err){
                throw new Error(err);
            }
        }
    }),
  ],
}
export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};