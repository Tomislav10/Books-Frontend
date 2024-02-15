import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BooksActions} from './action-types';
import {
  GET_BOOKS_LIST_REQUEST,
  GetBooksListSuccess,
} from './actions';
import {Book} from '../../shared/interface/book';

@Injectable()
export class Effects {

  // API endpoint
  private readonly apiEndpoint = environment.booksApi;

  constructor(private action$: Actions, private http: HttpClient) {}

  /*private redirectToView = createEffect(
    () => this.action$.pipe(
        ofType<BooksActions.RedirectToView>(REDIRECT_TO_VIEW),
        tap(action => this.router.navigate([action.payload.redirectPath]))
      ), { dispatch: false }
    );
*/
  private getBooksList = createEffect(
    () => this.action$.pipe(
      ofType<BooksActions.GetBooksListRequest>(GET_BOOKS_LIST_REQUEST),
      switchMap(() =>
        this.http.get<Book[]>(`${this.apiEndpoint}/books`)
          .pipe(
            map((data: Book[]) => new GetBooksListSuccess(data))
          )
      )
    )
  );

  /*private getContact = createEffect(
    () => this.action$.pipe(
      ofType<BooksActions.GetItemRequest>(GET_CONTACT_REQUEST),
      switchMap((action) =>
        this.http.get(`${this.apiEndpoint}/${action.payload.id}`)
          .pipe(
            map((data: Book) => new BooksActions.GetItemSuccess(data)),
            catchError((error: HttpErrorResponse) =>
              of(new BooksActions.RedirectToView({redirectPath: '../../'}))
            )
          )
      )
    ));*/

  /*private createContact = createEffect(
    () => this.action$.pipe(
      ofType<BooksActions.CreateItem>(CREATE_CONTACT),
      switchMap((action) => {
        return this.http.post(this.apiEndpoint, action.payload.data)
          .pipe(
            map(() =>
              new BooksActions.RedirectToView(
                {redirectPath: `../../view/${action.payload.data.id}`}
                )
            )
          );
      })
    )
  );*/

  /*private deleteContact = createEffect(
    () => this.action$.pipe(
      ofType<BooksActions.DeleteItem>(DELETE_CONTACT),
      switchMap((action) => {
        return this.http.delete(`${this.apiEndpoint}/${action.payload.id}`)
          .pipe(
            map((data: Book[]) => new BooksActions.GetItemsListRequest)
          );
      })
    )
  );*/
/*
  private updateContact = createEffect(
    () => this.action$.pipe(
      ofType<BooksActions.UpdateItem>(UPDATE_CONTACT),
      switchMap((action) => {
        return this.http.put(`${this.apiEndpoint}/${action.payload.id}`, action.payload.data)
          .pipe(
            mergeMap(() => [
              new BooksActions.GetItemRequest({id: (action.payload.id).toString()}),
              new BooksActions.GetItemsListRequest
            ])
          );
      })
    )
  );*/
}
