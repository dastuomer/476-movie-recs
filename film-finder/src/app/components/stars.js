"use client"
import React, { useState } from "react";
import './star.css';
import { StarIcon } from '@chakra-ui/icons';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return <div>
        {[... Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
                <label>
                    <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                    <StarIcon className='star' color={ratingValue <= (hover || rating) ? "gold" : "gray"} fontSize={25} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
                </label>
             );
        })}
        
        <p>The rating is {rating}/5</p>
        </div>;
}

export default StarRating;