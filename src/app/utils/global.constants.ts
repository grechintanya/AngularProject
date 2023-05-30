import { Course } from './global.models';

export const mockedCourses: Course[] = [
    {
        id: 1, 
        title: 'VideoCourse 1', 
        creationDate: '12/02/2022', 
        duration: 220, 
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Nam nemo dolorum debitis assumenda saepe ducimus, laudantium 
        voluptas tempora ab sit reiciendis id similique obcaecati, 
        tempore deserunt minus numquam deleniti necessitatibus.`
    },
    {
        id: 2, 
        title: 'VideoCourse 2', 
        creationDate: '10/05/2020', 
        duration: 150, 
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Nam nemo dolorum debitis assumenda saepe ducimus, laudantium 
        voluptas tempora ab sit reiciendis id similique obcaecati, 
        tempore deserunt minus numquam deleniti necessitatibus.`
    },
    {
        id: 3, 
        title: 'VideoCourse 3', 
        creationDate: '03/04/2021', 
        duration: 120, 
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet`
    }
]