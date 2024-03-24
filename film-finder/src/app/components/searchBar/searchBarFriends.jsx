"use client"
import React, { useState } from "react";

import "./search.css";
import { SearchIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";
import {Center, Input, InputGroup} from "@chakra-ui/react";


function SearchBar({ placeholder, dataSet, value}) {
    
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
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
                            onChange={handleChange}/>
                           

                </InputGroup>
            </Center>
                <div>
                        {dataSet.filter(data=>data.first_name.toLowerCase().includes(query.toLowerCase())).map((dataSet) => {
                            return <p className="hoverMe" key={dataSet.id}> {dataSet.first_name} </p>
                        })
                        }
                </div>
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