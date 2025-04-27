import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../MainLayout/MainLayout.tsx";
import {MovieInfo} from "../MovieInfo/MovieInfo.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>},
    {path: '/genres/:id', element: <MainLayout/>},
    {path: '/movie/:id', element: <MovieInfo/> }
])