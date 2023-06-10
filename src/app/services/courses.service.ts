import { mockedCourses, Course, CourseFields } from "../utils/public_api";

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

    updateCourse(courseID: number | string, fields: CourseFields) {
        this.courseList.forEach(item => {
            if (item.id === courseID) {
                item = Object.assign(item, fields)
            }
        })
    }

    removeCourse(courseID: number | string) {
        this.courseList = this.courseList.filter(item => item.id !== courseID)
    }
}
