import { Currency, Stock } from './../stock';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

export class StockFormComponent {
  @Input() stock?: Stock;
  @Output() stockSaved = new EventEmitter<Stock>();

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
  ) {}

  public getPurchasedDate() {
    // Unused
    return (this.stock && new Date(this.stock.datePurchased)) || new Date();
  }

  onSubmit($event: Event) {
    this.stockSaved.emit(this.stockForm.value);
  }
}
