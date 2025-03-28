import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/layouts.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children[
            {path: '/users', element: <UsersPage/>},
            {path: '/users', element: <UsersPage/>},
            {path: '/users', element: <UsersPage/>},
            {path: '/users', element: <UsersPage/>}
        ]
    }
]);