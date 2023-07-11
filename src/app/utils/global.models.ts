export interface Author {
    id: string | number;
    name: string;
}

export interface Course {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    isTopRated: boolean;
    authors: Author[];
}

export interface DeleteButtonClickedEvent {
    courseID: number;
    title: string;
}

export interface UserName {
    first: string;
    last: string;
}

export interface Token {
    token: string;
}

export interface Login {
    login: string;
    password: string;
}

export interface User {
    id?: number;
    token: string;
    name?: UserName;
    login?: string;
    password?: string;
}
