import {useEffect, useState} from "react";
import {serviceMovies} from "../services/api.service.ts";
import {IResults} from "../Modules/IMovies.ts";
import {ResultTypeModel} from "../Modules/ResultTypeModel.ts";


export const MoviesPage = () =>{
    const [movies, setMovies] = useState<IResults[]>([]);
    useEffect(() => {
        serviceMovies.getMovies()
            .then(({movies}:ResultTypeModel) =>{
                setMovies(movies)
            })
    }, []);

    return(
       <div>
           {
               movies.map((movie: IResults)=>
               <div>{movie.title} {movie.id}</div>)
           }

        </div>
    );
};