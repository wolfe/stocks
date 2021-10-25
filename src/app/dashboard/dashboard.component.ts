import { Component, OnInit } from '@angular/core';
import { Stock } from '../stocks/stock';
import { StockService } from '../stocks/services/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stockService.getStocks().subscribe(stocks => this.stocks = stocks.slice(0, 5));
  }
}
