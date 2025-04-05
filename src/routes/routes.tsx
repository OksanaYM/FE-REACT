import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {CarsPage} from "../Pages/CarsPage.tsx";
import {CreateCarPage} from "../Pages/CreateCarPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children:[
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element: <CreateCarPage/>}
        ]
    }
])