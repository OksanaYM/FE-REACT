import {IMovie} from "./Movie.ts";

export interface IAllMovies {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}