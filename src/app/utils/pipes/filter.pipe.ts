import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../global.models";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(courses: Course[], filterText: string) {
        if (!filterText) {
            return courses;
        } else {
            return courses.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()))
        }
    }
}
