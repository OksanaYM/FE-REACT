import {ICourse} from "./courses.ts";
import './courses.css';
import {CourseComponent} from "../components/course.tsx";
import{coursesAndDurationArray} from "./courses.ts";


export const CoursesComponent = () =>{
    return(
        <ul>
            {
                coursesAndDurationArray.map((value: ICourse, index: number) => {
                    return <CourseComponent course={value} key={index}/>;
                })
            }
        </ul>
    )


}