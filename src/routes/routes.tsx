import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../Layout/Layout.tsx";

export const routes = createBrowserRouter( [ {
    path: '/', element: <MainLayout/>, children:[
        {path: '/users', element: <UsersPage/>},
        {path: '/users/:id/carts', element: <CartsPage/>}
    ]
}])