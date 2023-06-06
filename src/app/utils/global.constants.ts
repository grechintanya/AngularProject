import { Course } from './global.models';

export const mockedCourses: Course[] = [
    {
        id: 1,
        title: 'VideoCourse 1',
        creationDate: new Date('2022-12-03'),
        duration: 220,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Nam nemo dolorum debitis assumenda saepe ducimus, laudantium 
        voluptas tempora ab sit reiciendis id similique obcaecati, 
        tempore deserunt minus numquam deleniti necessitatibus.`,
        topRated: true
    },
    {
        id: 2,
        title: 'videoCourse 2',
        creationDate: new Date('2023-06-10'),
        duration: 150,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Nam nemo dolorum debitis assumenda saepe ducimus, laudantium 
        voluptas tempora ab sit reiciendis id similique obcaecati, 
        tempore deserunt minus numquam deleniti necessitatibus.`,
        topRated: false
    },
    {
        id: 3,
        title: 'VideoCourse 3',
        creationDate: new Date('2023-05-30'),
        duration: 120,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet`,
        topRated: false
    }
]