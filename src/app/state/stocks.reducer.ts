import { createReducer, on } from '@ngrx/store';

import { listStocks } from './stocks.actions';
import { Stock } from '../stocks/stock';

export interface StocksState {
  stocks: ReadonlyArray<Stock>;
}

export const initialState: StocksState =  {
  stocks: []
};

export const stocksReducer = createReducer(
  initialState,
  on(listStocks, (state, { stocks }) => ({...state, stocks}))
);