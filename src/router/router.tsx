import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/usersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'products', element: <ProductsPage/>}
        ]
    }
]);
