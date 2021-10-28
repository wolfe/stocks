import { StockObj, Currency, Stock } from './../stock';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../services/stock.service';
import { Location } from '@angular/common';

// TODO:  Is this component doing too much? -- Separate form from fetching content; use the @Input
// TODO:  How to use the same form for create & update?

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    `,
  ],
})

export class StockFormComponent implements OnInit {
  @Input() stock?: Stock;

  stockForm = new FormGroup({
    shares: new FormControl(),
    ticker: new FormControl(),
    basis: new FormControl(),
    currency: new FormControl(),
    description: new FormControl(),
    datePurchased: new FormControl(), // TODO: Could not figure out how to properly populate the date (currently does time-zone)
  });

  public Currency = Currency;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private stockService: StockService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStock();
  }

  public getPurchasedDate() {
    // Unused
    return (this.stock && new Date(this.stock.datePurchased)) || new Date();
  }

  onSubmit($event: Event) {
    if (this.stock) {
      this.stockService
        .updateStock(
          new StockObj({ id: this.stock.id, ...this.stockForm.value })
        )
        .subscribe(() => this.goBack());
    } else {
      this.stockService
        .createStock(new StockObj({ id: null, ...this.stockForm.value }))
        .subscribe(() => this.goBack());
    }
  }

  getStock(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stockService.getStock(id).subscribe((stock) => (this.stock = stock));
  }

  goBack(): void {
    this.location.back();
  }

  createStock(): void {
    console.log(this.formBuilder);
  }
}
