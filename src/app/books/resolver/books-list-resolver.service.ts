import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {BooksState} from '../store';
import {GetBooksListRequest, GetFavoritesListRequest} from '../store/actions';

@Injectable()
export class BooksListResolverService implements Resolve<{}> {
  private store = inject(Store<BooksState>);

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new GetBooksListRequest);
    this.store.dispatch(new GetFavoritesListRequest({userId: localStorage.getItem("userId")}));

    return of('NONE');
  }
}
