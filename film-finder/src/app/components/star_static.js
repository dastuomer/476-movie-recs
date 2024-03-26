"use client"
import React from "react";
import './star_static.css';
import { StarIcon } from '@chakra-ui/icons';

function StarRatingStatic({ ratingNum }) {

    return <div>
        {[... Array(5)].map((star, i) => {
        star = i + 1;
                
            return (
                <StarIcon key={i} className='star' color={star <= ratingNum ? "gold" : "gray" } fontSize={25}/>
             );
        })}
        </div>;
}

export default StarRatingStatic;
