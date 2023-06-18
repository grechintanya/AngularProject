import { mockedCourses, Course } from "../utils/public_api";

export class CoursesService {

    courseList: Course[] = [...mockedCourses];

    getCourseList() {
        return this.courseList;
    }

    createCourse(newCourse: Course) {
        this.courseList = [...this.courseList, newCourse]
    }

    getCourseById(courseID: number | string) {
        return this.courseList.find(item => item.id === courseID)
    }

    updateCourse(courseID: number | string, newCourse: Course) {
        this.courseList = this.courseList.map(item => item.id === courseID ? newCourse : item)
    }

    removeCourse(courseID: number | string) {
        this.courseList = this.courseList.filter(item => item.id !== courseID)
    }
}
