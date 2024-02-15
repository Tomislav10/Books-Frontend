import {Action, combineReducers, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {AppState} from './interfaces';
import {booksReducer} from '../books/store';

export function appState(state: AppState, action: Action) {
  return combineReducers({
    booksReducer
  })(state, action);
}

export const metaReducers: MetaReducer<{}>[] = !environment.production ? [] : [];
