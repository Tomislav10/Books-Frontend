import {Action} from '@ngrx/store';
import {Book} from '../../shared/interface/book';

export const ADD_FAVORITES = '[Books] Add favorites request';
export const REMOVE_FAVORITES = '[Books] Remove favorites request';
export const GET_BOOKS_LIST_REQUEST = '[Books] Get books request';
export const GET_BOOKS_LIST_SUCCESS = '[Books] Get books success';
export const GET_FAVORITES_LIST_REQUEST = '[Books] Get favorites books request';
export const GET_FAVORITES_LIST_SUCCESS = '[Books] Get favorites books success';

export class GetBooksListRequest implements Action {
  public readonly type = GET_BOOKS_LIST_REQUEST;
}

export class GetBooksListSuccess implements Action {
  public readonly type = GET_BOOKS_LIST_SUCCESS;

  constructor(public data: Book[]) {
  }
}

export class GetFavoritesListRequest implements Action {
  public readonly type = GET_FAVORITES_LIST_REQUEST;

  constructor(public payload: {
    userId: string | null
  }) {}
}

export class GetFavoritesListSuccess implements Action {
  public readonly type = GET_FAVORITES_LIST_SUCCESS;

  constructor(public data: Book[]) {
  }
}

export class AddFavorites implements Action {
  public readonly type = ADD_FAVORITES;

  constructor(public payload: {
    userId: string | null,
    url: string,
    name: string,
    publisher: string,
    released: string,
    favorite: boolean
  }) {}
}

export class RemoveFavorites implements Action {
  public readonly type = REMOVE_FAVORITES;

  constructor(public payload: {
    userId: string | null,
    url: string,
    name: string,
    publisher: string,
    released: string,
    favorite: boolean
  }) {}
}
