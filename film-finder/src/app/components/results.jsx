
import StarRatingStatic from "./star_static.js";
import { Button } from "@chakra-ui/react";

export default function Results({ movieID }) {

    const getEverything = async (movieID) => {

        const getMovieInfo = async (movieID) => {
            try {
                //console.log(`http://localhost:3000/api/recsAPI?id=${movieID}`)
                const res = await fetch(`http://localhost:3000/api/recsAPI?id=${movieID}`, {
                    cache: 'no-store',
                });

                if (!res.ok) {
                    throw new Error("failed to fetch movie info");
                }

                const myJSON = JSON.parse(JSON.stringify(await res.json()));
                console.log(myJSON)
                return await myJSON;
            } catch (error) {
                console.log("Error loading movie info: ", error);
            }
        }
        const MInfo = getMovieInfo(movieID);

        const id = MInfo.movieInfo._id;
        const title = MInfo.movieInfo.title;
        const genres = MInfo.movieInfo.genres;
        const stars = Math.round(MInfo.movieInfo.imdb.rating / 2.0);
        const poster = MInfo.movieInfo.poster;
        const plot = MInfo.movieInfo.plot;
        const year = MInfo.movieInfo.year;
        const rated = MInfo.movieInfo.rated;
        const directors = MInfo.movieInfo.directors;
        const actors = MInfo.movieInfo.cast;

        title.getElementById("title").innerHTML = title;
        console.log(title.getElementById("title").innerHTML)
    }
    getEverything(movieID);
}
