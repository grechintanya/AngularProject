import * as coursesActions from './actions';

describe('CoursesState action creators', () => {

    const courseList = [
        {
            id: 1, name: 'VideoCourse 1', date: '2022-12-03',
            length: 220, description: 'Course 1 description', isTopRated: true, authors: []
        },
        {
            id: 2, name: 'videoCourse 2', date: '2023-06-10', length: 150,
            description: 'Course 2 description', isTopRated: false, authors: []
        },
        {
            id: 3, name: 'VideoCourse 3', date: '2023-05-30',
            length: 120, description: 'Course 3 description', isTopRated: false, authors: []
        }
    ];

    describe('Action creators for getCourses event', () => {

        it('getCourses should create a "get courses" action', () => {
            const action = coursesActions.getCourses();
            expect(action.type).toBe('[Courses] Get courses');
        });

        it('getCoursesSuccess should create a "get courses success" action with courses property', () => {
            const action = coursesActions.getCoursesSuccess({ courses: courseList });
            expect(action.type).toBe('[Courses] Get courses success');
            expect(action.courses).toEqual(courseList);
        });

        it('getCoursesFailure should create a "get courses failure" action with error property', () => {
            const action = coursesActions.getCoursesFailure({ error: 'error' });
            expect(action.type).toBe('[Courses] Get courses failure');
            expect(action.error).toEqual('error');
        });
    });

    describe('Action creators for deleteCourse event', () => {

        it('deleteCourse should create a "delete course" action with id property', () => {
            const action = coursesActions.deleteCourse({ id: 1 });
            expect(action.type).toBe('[Courses] Delete course');
        });

        it('deleteCourseSuccess should create a "delete course success" action with id property', () => {
            const action = coursesActions.deleteCourseSuccess({ id: 1 });
            expect(action.type).toBe('[Courses] Delete course success');
            expect(action.id).toEqual(1);
        });

        it('deleteCourseFailure should create a "delete course failure" action with error property', () => {
            const action = coursesActions.deleteCourseFailure({ error: 'error' });
            expect(action.type).toBe('[Courses] Delete course failure');
            expect(action.error).toEqual('error');
        });
    });

    describe('Action creators for createCourse event', () => {

        it('createCourse should create a "create course" action with newCourse property', () => {
            const action = coursesActions.createCourse({ newCourse: courseList[0] });
            expect(action.type).toBe('[Courses] Create course');
            expect(action.newCourse).toEqual(courseList[0]);
        });

        it('createCourseSuccess should create a "create course success" action with newCourse property', () => {
            const action = coursesActions.createCourseSuccess({ newCourse: courseList[0] });
            expect(action.type).toBe('[Courses] Create course success');
            expect(action.newCourse).toEqual(courseList[0]);
        });

        it('createCourseFailure should create a "create course failure" action with error property', () => {
            const action = coursesActions.createCourseFailure({ error: 'error' });
            expect(action.type).toBe('[Courses] Create course failure');
            expect(action.error).toEqual('error');
        });
    });

    describe('Action creators for updateCourse event', () => {

        it('updateCourse should create a "update course" action with id and course properties', () => {
            const action = coursesActions.updateCourse({ id: 1, course: courseList[0] });
            expect(action.type).toBe('[Courses] Update course');
            expect(action.course).toEqual(courseList[0]);
        });

        it('updateCourseSuccess should create a "update course success" action with course property', () => {
            const action = coursesActions.updateCourseSuccess({ course: courseList[0] });
            expect(action.type).toBe('[Courses] Update course success');
            expect(action.course).toEqual(courseList[0]);
        });

        it('updateCourseFailure should create a "update course failure" action with error property', () => {
            const action = coursesActions.updateCourseFailure({ error: 'error' });
            expect(action.type).toBe('[Courses] Update course failure');
            expect(action.error).toEqual('error');
        });
    });
})