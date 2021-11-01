import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import * as fromStockReducer from './stocks.reducer';

export const selectStocks = (state: AppState) => state.stocks;
export const getStocks = createSelector(
  selectStocks,
  (state: fromStockReducer.StocksState) => state.stocks
);
