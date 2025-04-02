import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () =>{
    const [searchParams, setSearchParams] = useSearchParams({page:'1'})
    let currentPage = Number(searchParams.get('page') || '1')
    return(
        <div>
            <button onClick={ ()=>{
                    setSearchParams({page: (--currentPage).toString()})
            }}>PREV</button>
            <button onClick={ () =>{
                    setSearchParams({page: (++currentPage).toString()})
            }}>NEXT</button>
        </div>
    )
}