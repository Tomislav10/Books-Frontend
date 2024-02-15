import {Action} from '@ngrx/store';
import {Book} from '../../shared/interface/book';
import {GetBooksListSuccess} from './actions';

export interface BooksState {
  booksList?: Book[];
}

export function booksReducer(
  booksState: BooksState | undefined,
  action: Action
) {
  if (action instanceof GetBooksListSuccess) {
    return {...booksState, booksList: action.data};
  }

  return booksState;
}
