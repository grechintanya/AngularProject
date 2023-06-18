export interface Course {
    id: string | number,
    title: string,
    creationDate: Date,
    duration: number,
    description: string,
    topRated: boolean
}

export interface DeleteButtonClickedEvent {
    courseID: number | string, 
    title: string
}

export interface User {
    id: string | number,
    userName: string,
    email: string,
    password: string

}