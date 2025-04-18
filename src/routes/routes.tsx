import {createBrowserRouter} from "react-router";
import {UsersPage} from "../Pages/UsersPage.tsx";
import {PostsPage} from "../Pages/PostsPage.tsx";
import {CommentsPage} from "../Pages/CommentsPage.tsx";
import {ComplexPage} from "../Pages/ComplexPage.tsx";
import {MainLayout} from "../MainLayout/MainLayout.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'complex', element: <ComplexPage/>},
        ]}
])