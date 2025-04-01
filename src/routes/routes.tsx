import {createBrowserRouter} from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {path: 'users', element: <UsersPage/>}
        ]
    }
])