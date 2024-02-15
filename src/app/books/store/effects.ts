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

  private getBooksList = createEffect(
    () => this.action$.pipe(
      ofType<BooksActions.GetBooksListRequest>(GET_BOOKS_LIST_REQUEST),
      switchMap(() =>
        this.http.get<Book[]>(`${this.apiEndpoint}/houses`)
          .pipe(
            map((data: Book[]) => new GetBooksListSuccess(data))
          )
      )
    )
  );
}
