import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BooksState} from './reducer';

export const selectBooksState = createFeatureSelector<BooksState>('booksState');

export const getAllBooks = createSelector(
  selectBooksState,
  state => state && state.booksList
);

export const getFavoritesBooks = createSelector(
  selectBooksState,
  state => state && state.favoritesList
);
