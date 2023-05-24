export interface Course {
    id: string | number,
    title: string,
    creationDate: string,
    duration: number,
    description: string
}

export interface User {
    id: string | number,
    firstName: string,
    lastName: string
}