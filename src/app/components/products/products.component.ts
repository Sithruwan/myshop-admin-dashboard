import {Component, inject} from '@angular/core';
import {CustomerStatusManagerComponent} from "../customer-status-manager/customer-status-manager.component";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import {NewProductComponent} from './inner-pages/new-product/new-product.component';
import {UpdateProductComponent} from './inner-pages/update-product/update-product.component';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CustomerStatusManagerComponent,
    MatIcon,
    ReactiveFormsModule,
    FormsModule,
    MatTooltip
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  searchTerm: any;

  readonly dialog = inject(MatDialog);
  deleteCustomer() {

  }



  openDialogManage() {
    const dialogRef = this.dialog.open(NewProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEdit() {
    const dialogRef = this.dialog.open(UpdateProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
