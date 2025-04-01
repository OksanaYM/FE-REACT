import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../Layout/MainLayout.tsx";
import {UsersPage} from "../page/UsersPage.tsx";
import {CartsPage} from "../page/CartsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {path: '/users', element: <UsersPage/>},
            {path: '/users/:id/carts', element: <CartsPage/>}
        ]
    }
])