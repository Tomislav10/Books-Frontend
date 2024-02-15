import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {BooksState} from '../store';
import {GetBooksListRequest} from '../store/actions';

@Injectable()
export class BooksListResolverService implements Resolve<{}> {
  constructor(private readonly store: Store<BooksState>, public router: Router) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new GetBooksListRequest);

    return of('NONE');
  }
}
