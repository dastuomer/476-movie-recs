"use client"
import React, { useState } from "react";
import { Users } from "./users";
import "./search.css";

const SearchBar = () => {
    
    const [query, setQuery] = useState("");

    return (
        <div>
            <input type="text" placeholder="Search friends..." className="search" onChange={e=> setQuery(e.target.value)}/>
            <ul className="list">
                {Users.filter(user=>user.first_name.includes(query)).map((user) => (
                    <li key={user.id} className="listItem">{user.first_name}</li>
                ))}
            </ul>
        </div>
    );

}
export default SearchBar;
