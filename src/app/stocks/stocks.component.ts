import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Stock, Currency } from '../stock';
import { STOCKS } from '../stocks-test';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  stocks = STOCKS;
  selectedStock?: Stock;

  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
