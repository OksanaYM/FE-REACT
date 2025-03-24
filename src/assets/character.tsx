import {ISim, simpsons} from "./sim.ts";
import {CharacterComponent} from "../character/sim.tsx";


export const FamilyComponent = () => {
    return(
        <div className={'family'}>
            {
                simpsons.map((value: ISim, index: number) =>
                     <CharacterComponent info={value} key={index}  >
                         {value.info}
                     </CharacterComponent>
                )
            }
        </div>
    )
}