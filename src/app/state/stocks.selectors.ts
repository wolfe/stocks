import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Stock } from '../stocks/stock';
import { AppState } from './app.state';
import * as fromStockReducer from './stocks.reducer';

// export const selectStocks = (state: AppState) => state.stocks;
// export const getStocks = createSelector(
//   selectStocks,
//   (state: fromStockReducer.StocksState) => state.stocks
// );

export const selectStocks =
  createFeatureSelector<ReadonlyArray<Stock>>('stocks');
export const selectStockCollection = createSelector(selectStocks, (stocks) => {
  return stocks;
});
