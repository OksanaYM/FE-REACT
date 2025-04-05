import {Link} from "react-router-dom";

export const Menu =() =>{
    return(
        <ul>
            <li>
                <Link to={'/cars'}>Cars</Link>
            </li>

            <li>
                <Link to={'/cars/create'}>Create Cars</Link>
            </li>

        </ul>
    )
}