import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Stock } from "../stocks/stock";

export const selectStocks = createSelector(
  (state: AppState) => state.stocks,
  (stocks: ReadonlyArray<Stock>) => stocks
);
