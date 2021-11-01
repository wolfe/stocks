import { createReducer, on } from '@ngrx/store';

import { listStocks } from './stocks.actions';
import { Stock } from '../stocks/stock';

export const initialState: ReadonlyArray<Stock> =  [];

export const stocksReducer = createReducer(
  initialState,
  on(listStocks, (state, { stocks }) => ([...stocks]))
);