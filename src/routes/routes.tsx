import {createBrowserRouter} from "react-router-dom";
import {MoviesList} from "../MoviesList/MoviesList.tsx";
import {MainLayout} from "../MainLayout/MainLayout.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {path: 'movie/:id', element: <MoviesList/> }
        ]
    }
])