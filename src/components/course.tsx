import {ICourse} from "../Courses/courses.ts";
import {FC} from "react";

type PropsType ={
    course: ICourse
}
export const CourseComponent: FC<PropsType> =({course}) =>{
    return (
        <li>{course.title}: {course.monthDuration}</li>
    )
}