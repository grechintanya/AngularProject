import { Course } from './global.models';

export const baseURL = 'http://localhost:3004';

export const mockedCourses: Course[] = [
    {
        id: 1,
        name: 'VideoCourse 1',
        date: '2022-12-03',
        length: 220,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Nam nemo dolorum debitis assumenda saepe ducimus, laudantium 
        voluptas tempora ab sit reiciendis id similique obcaecati, 
        tempore deserunt minus numquam deleniti necessitatibus.`,
        isTopRated: true,
        authors: [{id:1, name: 'author name 1'}]
    },
    {
        id: 2,
        name: 'videoCourse 2',
        date: '2023-06-10',
        length: 150,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Nam nemo dolorum debitis assumenda saepe ducimus, laudantium 
        voluptas tempora ab sit reiciendis id similique obcaecati, 
        tempore deserunt minus numquam deleniti necessitatibus.`,
        isTopRated: false,
        authors: [{id:2, name: 'author name 2'}, {id:3, name: 'author name 3'}]
    },
    {
        id: 3,
        name: 'VideoCourse 3',
        date: '2023-05-30',
        length: 120,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet`,
        isTopRated: false,
        authors: [{id: 22, name: 'author name 22'}]
    }
]