import {FormControl, ɵValue} from '@angular/forms';

export class Product {
  qty: number;
  unitPrice: number;
  description: string;

  constructor(qty: number, unitPrice: number, description: string) {
    this.qty = qty;
    this.unitPrice = unitPrice;
    this.description = description;
  }
}
