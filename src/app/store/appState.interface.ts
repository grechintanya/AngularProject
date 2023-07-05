import { AuthState } from "./auth/authState.interface";
import { CoursesState } from "./courses/coursesState.interface";

export interface AppState {
    auth: AuthState,
    courses: CoursesState
}