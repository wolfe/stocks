import { MATERIAL_SANITY_CHECKS_FACTORY } from '@angular/material/core/common-behaviors/common-module';
import { Currency, Stock } from './stock';

export const STOCKS: Stock[] = [
    { id: 1, ticker: 'MSFT', shares: 20, costBasis: 23.25, currency: Currency.USD, description: 'Microsoft', datePurchased: "2010-07-05"},
    { id: 2, ticker: 'BMO', shares: 30, costBasis: 234.25, currency: Currency.CAD, description: 'Bank of Montreal', datePurchased: "2015-12-01"},
    { id: 3, ticker: 'AAPL', shares: 2.5, costBasis: 148.25, currency: Currency.USD, description: 'Apple', datePurchased: "2021-10-05"},
]