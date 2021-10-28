import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../services/stock.service';
import { Currency, Stock, StockObj } from '../stock';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-detail',
  template: '<h2>{{getTitle()}}</h2><app-stock-form [stock]=stock (saved)="save($event)" (canceled)="goBack()"></app-stock-form>',
})
export class StockDetailComponent implements OnInit {
  stock?: Stock;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStock();
  }

  getTitle(): string {
    return !this.stock ? "" :
           this.stock.id ? "Edit " + this.stock.ticker : "Add new stock";
  }

  getStock(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.stockService.getStock(id).subscribe((stock) => (this.stock = stock));
    } else {
      this.stock = new StockObj({id: 0, shares: 0, ticker: "", basis: 0, currency: Currency.CAD, description: "", datePurchased: "2021-01-01"})
    }
  }

  save(stock: Stock): void {
    if (this.stock) {
      this.stockService
        .updateStock(new StockObj({ ...stock, id: this.stock.id }))
        .subscribe(() => this.goBack());
    } else {
      this.stockService
        .createStock(new StockObj(stock))
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
