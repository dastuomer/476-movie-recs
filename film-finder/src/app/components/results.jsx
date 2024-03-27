import TheReturnOfTheKing from "./movie-picture.jsx";
import StarRatingStatic from "./star_static.js";
import { Button } from "@chakra-ui/react";

export default function Results() {
    
  return (
    <div className="row">
        <div className="col-3">
            <TheReturnOfTheKing className="align-left" />
            <Button marginTop={5} borderRadius={50}>
                <a href='/review-my-movie'>+ Review Movie</a>
            </Button>
        </div>

        <div className="col-9 fs-3">
            <p className="h1">Generic movie</p>

            <p className="h4 mt-5">
                This is a plot summary This is a plot summary This is
                a plot summary This is a plot summary This is a plot
                summary This is a plot summary This is a plot summary
                This is a plot summary This is a plot summary This is
                a plot summary This is a plot summary This is a plot
                summary This is a plot summary This is a plot summary
            </p>

            <div className="h3 mt-5">
                <span> IMDb Rating: <StarRatingStatic ratingNum={4}/> </span>
            </div>
        </div>
    </div>
   
  );
}
