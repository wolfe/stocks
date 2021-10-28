export enum Currency { USD = 'USD', CAD = 'CAD' }

export interface Stock {
  id: number;
  shares: number;
  ticker: string;
  basis: number;
  currency: Currency;
  description: string;
  datePurchased: string;
}

/* TODO: Do we need this object --- used in stock-form.component.ts */
export class StockObj implements Stock {
  public id: number;
  public shares: number;
  public ticker: string;
  public basis: number;
  public currency: Currency;
  public description: string;
  public datePurchased: string;
  constructor(s: Stock) {
    this.id = s.id;
    this.shares = s.shares;
    this.ticker = s.ticker;
    this.basis = s.basis;
    this.currency = s.currency;
    this.description = s.description;
    this.datePurchased = s.datePurchased;
  }
}
