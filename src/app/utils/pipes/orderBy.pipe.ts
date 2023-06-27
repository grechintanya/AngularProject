import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../public_api";

@Pipe({
    name: 'orderByDate'
})
export class OrderByPipe implements PipeTransform {
    transform(courses: Course[]) {
        return courses.sort((a: Course, b: Course) => new Date(b.date).getTime() - new Date(a.date).getTime() )
    }
}
