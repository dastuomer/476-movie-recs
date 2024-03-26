"use client"
import React, { useState } from "react";
import './star.css';
import { StarIcon } from '@chakra-ui/icons';

function StarRating({ ratingNum }) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return <div>
        {[... Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
                <label key={i}> {/* Needs to have a unique key variable, or else will have 2 billion warnings every time you load this function.*/}
                    <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                    <StarIcon className='star' color={ratingValue <= (hover || rating) ? "gold" : "gray"} fontSize={25} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
                </label>    
             );

        })}  
        <input type="radio" value={rating}></input>
        </div>;
        
}

export default StarRating;
