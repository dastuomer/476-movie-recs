//This route file is for authorizing user login attempts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/User";
import connect from "@/app/utils/dbconnect"

export const authOptions = {
  //This defines the login credentials of a user that are passed to this file
  providers: [
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
            email: {label: "Email", type: "text"},
            username: {label: "Username", type: "text"},
            password: {label: "Password", type: "password"}
        },
        async authorize(credentials) {
            //Connect to the MognoDB database
            await connect();
            try{
                //Looks for an instance in the DB of a user with the inputed email, returns the database entry
                const user = await User.findOne({email: credentials.email});
                if (user)
                {
                        //Checks if password in DB and inputed password match
                        if (credentials.password === user.password) {
                            return user;
                        }
                }     
            }catch (err){
                //Throws an error if the user doesn't exist
                throw new Error(err);
            }
        }
    }),
  ] 
}
export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};