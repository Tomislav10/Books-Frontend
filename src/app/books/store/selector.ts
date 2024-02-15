import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BooksState} from './reducer';

export const selectBooksState = createFeatureSelector<BooksState>('phonebookState');

export const getAllContacts = createSelector(
  selectBooksState,
  state => state && state.booksList
);
