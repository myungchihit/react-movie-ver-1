import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        // then을 쓰지 않는다.
        // .then((response) => response.json())
        // .then((json) => {
        //     setMovies(json.data.movies);
        //     setLoading(false);
        // });

        // const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
        // const json = await response.json();
        
        // 위에 방법 더 간단하게 만들기
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`)
        ).json();

        setMovies(json.data.movies);
        setLoading(false)
    }

    useEffect(() => {
        getMovies();
    }, [])
 
    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
                <div>{movies.map(movie => 
                    <Movie 
                        key={movie.id}
                        coverImg={movie.medium_cover_image} 
                        title={movie.title}
                        summary= {movie.summary}
                        genres = {movie.genres}
                        />
                )}</div>}
        </div>
    ) 
}

export default Home;