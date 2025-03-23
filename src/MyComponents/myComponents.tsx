import {FC} from "react";

type myComponentType = {text: string}
const myComponents:FC<myComponentType>=({text})=>{
    return <>{text}</>
}
export default myComponents