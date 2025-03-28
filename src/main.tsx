import { createRoot } from 'react-dom/client'
import './index.css'
import {UsersPage} from "./pages/UsersPage.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App.tsx";
import {CommentsPage} from "./pages/CommentsPage.tsx";
import {PostsPage} from "./pages/PostsPage.tsx";
import {ProductsPage} from "./pages/ProductsPage.tsx";

createRoot(document.getElementById('root')!).render(<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<App/>}>
            <Route path={'/users'} element={<UsersPage/>} />
            <Route path={'/posts'} element={<PostsPage/>} />
            <Route path={'/comments'} element={<CommentsPage/>} />
            <Route path={'/products'} element={<ProductsPage/>} />
        </Route>
    </Routes>

</BrowserRouter>);
