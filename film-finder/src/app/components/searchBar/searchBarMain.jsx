import "./search.css";
import { Center, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRouter } from 'next/navigation'

function SearchBar() {
    const router = useRouter()

    const getRecs = async (e) => {
        e.preventDefault();
        const search = e.target[0].value
        //console.log("search" + search)

            const response = await fetch("http://127.0.0.1:5000/enter-movie", {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: search
            });
            if (response.ok) {
                console.log("response worked!");

            }
        




        const searchMovie = async (search) => {
            try {
                const res = await fetch(`http://localhost:3000/api/recsAPI?name=${search}`, {
                    cache: 'no-store',
                });

                if (!res.ok) {
                    throw new Error("Search not found");
                }
                const myJSON = JSON.parse(JSON.stringify(await res.json()));
                console.log(myJSON)
                return await myJSON;
            } catch (error) {
                console.log("Error searching: ", error);
            }
        };

        const output = await searchMovie(search);
        if (!output.movieInfo) {
            return;
        }

        const sessionMovieInfo = { movieId: output.movieInfo._id, poster: output.movieInfo.poster, title: output.movieInfo.title, plot: output.movieInfo.plot, rating: output.movieInfo.ratings5 }
        console.log(sessionMovieInfo)
        router.push(`/recs/${new URLSearchParams(sessionMovieInfo).toString()}`)

    }


    return (
        <div className="search">
            <Center>
                <InputGroup size="lg" w="80%" margin="15px">
                    <form className="form" onSubmit={getRecs}
                    >
                        <Input type="text"
                            placeholder={"Search for a movie..."}
                            size="lg"
                            w="100%"
                            borderColor="#4A5568"
                            borderWidth={1.5}
                            borderRadius={50}
                        />
                    </form>
                </InputGroup>
            </Center>
        </div>

    );

}
export default SearchBar;