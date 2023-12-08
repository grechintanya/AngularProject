import { Author, Course } from 'src/app/utils/public_api';

export interface CoursesState {
    courses: Course[];
    isLoading: boolean;
    error: string | null;
    searchQuery: string;
    allAuthors: Author[];
}
