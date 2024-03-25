"use client"
import React, { useState } from "react";

import "./search.css";
import { SearchIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";
import {Center, Input, InputGroup, InputRightElement} from "@chakra-ui/react";


function SearchBar({ placeholder, dataSet, value}) {
    
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    {/*async function searchMovie(title)  {
        try {
            //Creates POST to send to route.js in the register folder
            const res = await fetch("/api/movie_title", {
                method: "GET",
                headers: {
                    "Content-Type": "applications/json",},
                body: JSON.stringify({
                    title
                })
            })
            //Error for if the username/email is in the DB already
            if (res.status == 400) {
                setError("Movie not found.");
            }
            //Signifies that account is created, automatically sends user to the profile page (can be changed)
            if (res.status == 200) {
                setError("Movie found!");
                console.log(title);
            }
        }catch(error) {
            setError("Error, please try again.");
        }
    }
*/}

    const fillSearch = async (searchWord) =>{
        setQuery(searchWord); // Fills the search bar with the title clicked
        {/*try{
            const res = await fetch(`http://localhost:3000/api/movie_title/${"Batman"}`);
            console.log(res);
        }
        catch (error) {}
        */}
    }

    const clearInput = () => {
        setQuery(""); // Removes all words from string
        setQuery([]); // Deletes the div 
    }

    return (
        <div className="search">
            <Center>
                <InputGroup size="lg" w="80%" margin="15px">
                    <Input type="text" 
                            placeholder={placeholder} 
                            size="lg"
                            w="100%"
                            borderColor="#4A5568"
                            borderWidth={1.5}
                            borderRadius={50}
                            onChange={handleChange}
                            value={query}/>
                       
                    <InputRightElement id="button"> {query.length === 0 ? <SearchIcon/> : <CloseIcon onClick={clearInput}/>}</InputRightElement>
                </InputGroup>
            </Center>
            {query.length != 0 && (
                <div className="dataResult"> {/*onClick={console.log(dataSet.Title)}*/}
                        {dataSet.filter(data=>data.Title.toLowerCase().includes(query.toLowerCase())).slice(0,7).map((dataSet) => {
                            return <p className="hoverMe" key={dataSet.id} onClick={()=>fillSearch(dataSet.Title)} > {dataSet.Title} </p>
                        })
                        }
                </div>
            )}
        </div>
        
    );

}
export default SearchBar;

/* 

<div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={e=> setQuery(e.target.value)}/>
                <div className="searchIcon"> <SearchIcon/></div>
            </div>
            <div className="dataResult"></div>
             <ul className="list">
                {Movies.filter(movie=>movie.Title.includes(query)).map((movie) => (
                    <li key={movie.id} className="listItem">{movie.Title}</li>
                ))}
            </ul>
        </div>



    {Users.filter(user=>user.first_name.includes(query)).map((user) => (
    <li key={user.id} className="listItem">{user.first_name}</li>
    ))}

    ^^ Code for friends
*/