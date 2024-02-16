import {Action} from '@ngrx/store';
import {Book} from '../../shared/interface/book';
import {GetBooksListSuccess, GetFavoritesListSuccess} from './actions';

export interface BooksState {
  booksList?: Book[];
  favoritesList?: Book[];
}

export function booksReducer(
  booksState: BooksState | undefined,
  action: Action
) {
  if (action instanceof GetBooksListSuccess) {
    return {...booksState, booksList: action.data};
  }

  if (action instanceof GetFavoritesListSuccess) {
    return {...booksState, favoritesList: action.data};
  }

  return booksState;
}
