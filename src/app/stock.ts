export enum Currency {USD, CAD}

export interface Stock {
    id: number;
    shares: number;
    ticker: string;
    costBasis: number;
    currency: Currency;
    description: string;
    datePurchased: string;
}