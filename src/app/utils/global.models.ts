export interface Course {
    id: string | number,
    title: string,
    creationDate: Date,
    duration: number,
    description: string,
    topRated: boolean
}

export interface User {
    id: string | number,
    firstName: string,
    lastName: string
}