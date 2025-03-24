

import {ISim} from "../assets/sim.ts";

type SimsType ={
    info: ISim;
    children: string
}

export const CharacterComponent = ({info, children}: SimsType) =>{
    return (
        <div>
            <h2>{info.name} {info.surname}</h2>
            <p>{children}</p>
            <img src={info.photo} alt={info.name}/>
        </div>
    )
}