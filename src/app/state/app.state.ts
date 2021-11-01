import { Stock } from "../stocks/stock";
import * as fromStockReducer from './stocks.reducer';

export interface AppState {
  stocks: fromStockReducer.StocksState;
}
