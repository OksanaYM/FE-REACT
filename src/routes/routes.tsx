import {createBrowserRouter} from "react-router-dom";
import {MovieDetailsPage} from "../MovieDetailPage/MovieDetailsPage.tsx";
import {MainLayout} from "../MainLayout/MainLayout.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {path: 'movie/:id', element: <MovieDetailsPage/> }
        ]
    }
])