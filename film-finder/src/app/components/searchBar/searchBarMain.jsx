import React, { useState } from "react";

import "./search.css";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import {Center, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
// 

function SearchBar({ placeholder, dataSet}) {
    const [query, setQuery] = useState("");
    const [searchWord, setSearchWord] = useState("");
    

    const getMovies = async() => {
        try {
        const res = await fetch(`http://localhost:3000/api/movie_title?request=${query}`, {cache: "no-store"});
        if (!res.ok) {
        throw new Error("Failed to fetch movies");
        }
        const convert = JSON.parse(JSON.stringify(await res.json()));
        console.log(convert);
        return await convert;

        } catch (error) {
        console.log("Error loading movies", error);
        }
    }

    const handleChange = async (e) => {
        setSearchWord(e.target.value);
        setQuery(e.target.value);
        await getMovies();
        //console.log(movies);
    }

    const callGetMovies = async () => {
        await getMovies();
    }
    

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
                    <form className="form" onSubmit={callGetMovies}>
                        <Input type="text" 
                                placeholder={placeholder} 
                                size="lg"
                                w="100%"
                                borderColor="#4A5568"
                                borderWidth={1.5}
                                borderRadius={50}
                                onChange={handleChange}
                                value={searchWord}/>
                        
                        <InputRightElement id="button"> {searchWord.length === 0 ? <SearchIcon/> : <CloseIcon onClick={clearInput}/>}</InputRightElement>
                    </form>
                </InputGroup>
            </Center>
            {/*
            {query.length != 0 && (
                <div className="dataResult">
                        {dataSet.filter(data=>data.Title.toLowerCase().includes(query.toLowerCase())).slice(0,7).map((dataSet) => {
                            return <p className="hoverMe" key={dataSet.id} onClick={()=>fillSearch(dataSet.Title)} > {dataSet.Title} </p>
                        })
                    }
                </div>
            )}
            */}
        </div>
        
    );

}
export default SearchBar;