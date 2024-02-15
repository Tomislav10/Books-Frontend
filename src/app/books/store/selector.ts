import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BooksState} from './reducer';

export const selectBooksState = createFeatureSelector<BooksState>('booksState');

export const getAllBooks = createSelector(
  selectBooksState,
  state => state && state.booksList
);

/*export const getFavoriteContacts = createSelector(
  getAllContacts,
  state => (state || []).filter(
    item => item.favorite
  )
);

export const getCurrentContact = createSelector(
  selectBooksState,
  state => state && state.currentContact
);*/
