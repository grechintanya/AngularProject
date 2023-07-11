import { User } from "src/app/utils/public_api";

export interface AuthState {
    isAuthenticated: boolean,
    user: User,
    isLoading: boolean,
    error: string | null
}
