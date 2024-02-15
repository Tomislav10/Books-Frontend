import {Action} from '@ngrx/store';
import {Book} from '../../shared/interface/book';

export const GET_BOOKS_LIST_REQUEST = '[Books] Get books request';
export const GET_BOOKS_LIST_SUCCESS = '[Books] Get books success';

export class GetBooksListRequest implements Action {
  public readonly type = GET_BOOKS_LIST_REQUEST;
}

export class GetBooksListSuccess implements Action {
  public readonly type = GET_BOOKS_LIST_SUCCESS;

  constructor(public data: Book[]) {
  }
}
