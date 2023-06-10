import { FilterPipe } from './filter.pipe';
import { mockedCourses } from '../global.constants';

describe('FilterPipe', () => {
    
    const filterPipe = new FilterPipe();
    
    it('should return an array of 3 courses, when the filterText equal "videocourse"', () => {
        const result = filterPipe.transform(mockedCourses, 'videocourse');
        expect(result.length).toBe(3);
    });

    it('should return an array of one course with title "VideoCourse 1", when the filterText is "course 1"', () => {
        const result = filterPipe.transform(mockedCourses, 'course 1');
        expect(result.length).toBe(1);
        expect(result[0].title).toBe('VideoCourse 1')
    });

    it('should return an empty array, when the filterText equal "search"', () => {
        const result = filterPipe.transform(mockedCourses, 'search');
        expect(result.length).toBe(0);
    })
})