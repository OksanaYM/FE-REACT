import {useEffect, useState} from "react";
import {serviceMovies} from "../services/api.service.ts";
import {IAllMovies, IResults} from "../Modules/IMovies.ts";



export const MoviesPage = () =>{
    const [movies, setMovies] = useState<IAllMovies>();
    useEffect(() => {
        serviceMovies.getMovies()
            .then((value) =>{
                setMovies(value)
            })
    }, []);

    return(
       <div>
           {
               movies?.results.map((movie: IResults)=>
               <div>{movie.title} {movie.id}</div>)
           }

        </div>
    );
};