import {Action} from '@ngrx/store';
import {Book} from '../../shared/interface/book';

/*export const CREATE_CONTACT = '[Books] Create contact';
export const DELETE_CONTACT = '[Books] Delete contact';
export const UPDATE_CONTACT = '[Books] Update contact request';*/
export const GET_BOOKS_LIST_REQUEST = '[Books] Get books request';
export const GET_BOOKS_LIST_SUCCESS = '[Books] Get books success';
/*export const GET_CONTACT_REQUEST = '[Books] Get contact request';
export const GET_CONTACT_SUCCESS = '[Books] Get contact success';
export const REDIRECT_TO_VIEW = '[Books] Redirect to view';*/

export class GetBooksListRequest implements Action {
  public readonly type = GET_BOOKS_LIST_REQUEST;
}

export class GetBooksListSuccess implements Action {
  public readonly type = GET_BOOKS_LIST_SUCCESS;

  constructor(public data: Book[]) {
  }
}
/*
export class GetItemRequest implements Action {
  public readonly type = GET_CONTACT_REQUEST;

  constructor(public payload: { id: string }) {
  }
}

export class GetItemSuccess implements Action {
  public readonly type = GET_CONTACT_SUCCESS;

  constructor(public data: Book) {
  }
}

export class CreateItem implements Action {
  public readonly type = CREATE_CONTACT;

  constructor(public payload: { data: Book }) {}
}

export class DeleteItem implements Action {
  public readonly type = DELETE_CONTACT;

  constructor(public payload: { id: number }) {
  }
}

export class UpdateItem implements Action {
  public readonly type = UPDATE_CONTACT;

  constructor(public payload: { id: number, data: Book }) {}
}

export class RedirectToView implements Action {
  public readonly type = REDIRECT_TO_VIEW;

  constructor(public payload: { redirectPath: string }) {}
}*/
