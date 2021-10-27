import { Stock } from "../stocks/stock";

export interface AppState {
  stocks: ReadonlyArray<Stock>;
}
