import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../Layout/Layout.tsx";
import {UsersPage} from "../Pages/UsersPage.tsx";
import {CartsPage} from "../Pages/CartsPage.tsx";

export const routes = createBrowserRouter( [ {
    path: '/', element: <MainLayout/>, children:[
        {path: '/users', element: <UsersPage/>},
        {path: '/users/:id/carts', element: <CartsPage/>}
    ]
}])