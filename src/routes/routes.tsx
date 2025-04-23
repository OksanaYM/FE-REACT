import {createBrowserRouter} from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MoviesPage/>, children:[
            {path: '/movie/:id', element: <MovieDetailPage/> }
        ]
    }
])