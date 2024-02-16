import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BooksActions} from './action-types';
import {
  ADD_FAVORITES,
  GET_BOOKS_LIST_REQUEST, GET_FAVORITES_LIST_REQUEST,
  GetBooksListSuccess, GetFavoritesListSuccess, REMOVE_FAVORITES,
} from './actions';
import {Book} from '../../shared/interface/book';

@Injectable()
export class Effects {

  private readonly apiEndpoint = environment.booksApi;
  private readonly api = environment.api

  constructor(private action$: Actions, private http: HttpClient) {}

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

  private getFavoriteBooksList = createEffect(
    () => this.action$.pipe(
      ofType<BooksActions.GetFavoritesListRequest>(GET_FAVORITES_LIST_REQUEST),
      switchMap(() =>
        this.http.get<Book[]>(`${this.api}/get-favorites`)
          .pipe(
            map((data: Book[]) => new GetFavoritesListSuccess(data))
          )
      )
    )
  );

  private addFavorites = createEffect(
    () => this.action$.pipe(
      ofType<BooksActions.AddFavorites>(ADD_FAVORITES),
      switchMap((action) => {
        return this.http.put(`${this.api}/add-favorite`, action.payload)
          .pipe(
            mergeMap(() => [
              new BooksActions.GetBooksListRequest,
              new BooksActions.GetFavoritesListRequest
            ])
          );
      })
    )
  );

  private removeFavorites = createEffect(
    () => this.action$.pipe(
      ofType<BooksActions.RemoveFavorites>(REMOVE_FAVORITES),
      switchMap((action) => {
        return this.http.post(`${this.api}/remove-favorite`, action.payload)
          .pipe(
            mergeMap(() => [
              new BooksActions.GetBooksListRequest,
              new BooksActions.GetFavoritesListRequest
            ])
          );
      })
    )
  );
}
