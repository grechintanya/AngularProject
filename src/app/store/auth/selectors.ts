import { createSelector } from "@ngrx/store";
import { AppState } from "../appState.interface";

export const selectAuth = (state: AppState) => state.auth;

export const selectIsAuth = createSelector(selectAuth, (state) => state.isAuthenticated);

export const selectAuthToken = createSelector(selectAuth, (state) => state.user.token);

export const selectUserName = createSelector(selectAuth, (state) => state.user?.name?.first);

export const selectIsLoading = createSelector(selectAuth, (state) => state.isLoading);

export const selectError = createSelector(selectAuth, (state) => state.error);
