"use client"
import React, { useState } from "react";

import "./search.css";
import { SearchIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";
import {Center, Input, InputGroup, InputRightElement} from "@chakra-ui/react";


function SearchBar({ placeholder, dataSet, value}) {
    
    const [query, setQuery] = useState("");
    const [searchWord, setSearchWord] = useState("");


    const handleChange = (e) => {
        setSearchWord(e.target.value);
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
        setQuery([])
        setSearchWord(searchWord); // Fills the search bar with the title clicked
        {/*try{
            const res = await fetch(`http://localhost:3000/api/movie_title/${"Batman"}`);
            console.log(res);
        }
        catch (error) {}
        */}
        
    }

    const clearInput = () => {
        setSearchWord(""); // Removes all words from string
        setQuery([]); // Deletes the div

    }

    const formSubmit = (search) => {
        console.log(search);
    }
    

    return (
        <div className="search">
            <Center>
                <InputGroup size="lg" w="80%" margin="15px">
                    <form className="form" onSubmit={formSubmit(searchWord)}>
                        <Input type="text" 
                                placeholder={placeholder} 
                                size="lg"
                                w="100%"
                                borderColor="#4A5568"
                                borderWidth={1.5}
                                borderRadius={50}
                                onChange={handleChange}
                                value={searchWord}/>
                        
                        <InputRightElement id="button"> {query.length === 0 ? <SearchIcon/> : <CloseIcon onClick={clearInput}/>}</InputRightElement>
                    </form>
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