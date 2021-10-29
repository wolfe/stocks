import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from './core/core.module';
import { bookReducer } from './crud/books.reducer';;
import { BookState } from './crud/books.model';

export const FEATURE_NAME = 'examples';
export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ExamplesState> = {
  books: bookReducer,
};

export interface ExamplesState {
  books: BookState;
}

export interface State extends AppState {
  examples: ExamplesState;
}
