import { createAction, props } from "@ngrx/store";
import { Stock } from "../stocks/stock";

export const addStock = createAction(
    '[Stocks] Add Stock',
    props<{stockId: number}>()
);

export const removeStock = createAction(
    '[Stocks] Delete Stock',
    props<{stockId: number}>()
);

export const listStocks = createAction(
    '[Stocks] List Stocks',
    props<{stocks: ReadonlyArray<Stock>}>()
);
