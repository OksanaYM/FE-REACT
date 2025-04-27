import {IGenre} from "./IGenre.ts";

export interface Production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Production_countries {
  iso_3166_1: string;
  name: string;
}

export interface Spoken_language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_companies[];
  production_countries: Production_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spoken_language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}