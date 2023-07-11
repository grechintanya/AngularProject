import { Course } from "src/app/utils/global.models";

export interface CoursesState {
    courses: Course[],
    isLoading: boolean,
    error: string | null,
    searchQuery: string
}
