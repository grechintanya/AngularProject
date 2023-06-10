import { OrderByPipe } from './orderBy.pipe';
import { mockedCourses } from '../global.constants';

describe('OrderByPipe', () => {
    
    const orderByPipe = new OrderByPipe();
    const couresList = [...mockedCourses];
    const sortedCoursesList = orderByPipe.transform(couresList);
    
    it('should return an array of 3 courses', () => {
        expect(sortedCoursesList.length).toBe(3)
    });

    it('the first course should have the creation date equal "2023-06-10"', () => {
        expect(sortedCoursesList[0].creationDate).toEqual(new Date('2023-06-10'))
    });

    it('the third course should have the creation date equal "2022-12-03"', () => {
        expect(sortedCoursesList[2].creationDate).toEqual(new Date('2022-12-03'))
    });
})
