import { FilterPipe, mockedCourses, Course } from '../public_api';

describe('FilterPipe', () => {

    let filterPipe: FilterPipe;
    let coursesArray: Course[];
    
    beforeEach(() => {
        filterPipe = new FilterPipe();
        coursesArray = [...mockedCourses];
    });    
    
    it('should return an array of 3 courses, when the filterText equal "videocourse"', () => {
        const result = filterPipe.transform(coursesArray, 'videocourse');
        expect(result.length).toBe(3);
    });

    it('should return an array of one course with title "VideoCourse 1", when the filterText is "course 1"', () => {
        const result = filterPipe.transform(coursesArray, 'course 1');
        expect(result.length).toBe(1);
        expect(result[0].name).toBe('VideoCourse 1')
    });

    it('should return an empty array, when the filterText equal "search"', () => {
        const result = filterPipe.transform(coursesArray, 'search');
        expect(result.length).toBe(0);
    })
})