import {Component, inject} from '@angular/core';
import {CustomerStatusManagerComponent} from "../UI components/customer-status-manager/customer-status-manager.component";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import {NewProductComponent} from './inner-pages/new-product/new-product.component';
import {UpdateProductComponent} from './inner-pages/update-product/update-product.component';
import {MatTooltip} from '@angular/material/tooltip';
import {ManageProductImagesComponent} from './inner-pages/manage-product-images/manage-product-images.component';
import {RouterLink} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {DeleteProductComponent} from './inner-pages/delete-product/delete-product.component';
import {CurrencyPipe} from '@angular/common';
import {MatPaginator, PageEvent} from '@angular/material/paginator';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CustomerStatusManagerComponent,
    MatIcon,
    ReactiveFormsModule,
    FormsModule,
    MatTooltip,
    RouterLink,
    CurrencyPipe,
    MatPaginator
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  searchTerm: string ="";
  products: any[] = []; // To store product list
  count: number = 0;    // To store the total count of products
  page: any = 0;
  pageSize:any = 10;

  readonly dialog = inject(MatDialog);
  readonly productService = inject(ProductService);



ngOnInit() {

  this.loadAllData();
}

  openDialogManage() {
    const dialogRef = this.dialog.open(NewProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllData();
    });
  }

  openDialogEdit(product: any) {
    const dialogRef = this.dialog.open(UpdateProductComponent,{
      data: {
        product
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'updated') {
        console.log('updated successfully');
        this.loadAllData();
      }
    });
  }


  openDialogManageImages() {
    const dialogRef = this.dialog.open(ManageProductImagesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
   loadAllData() {
     this.productService.getAllProducts(this.searchTerm, this.page, this.pageSize).subscribe(response => {
       this.products = response.data.dataList; // Get the array of products
       this.count = response.data.count;       // Get the count
     });

   }

  openDeleteDialog(id: String) {
    const dialogRef = this.dialog.open(DeleteProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'deleted') {
        this.deleteProduct(id);
      }
    });
  }
  deleteProduct(propertyId: String) {
    this.productService.deleteProduct(propertyId).subscribe(response => {

      this.loadAllData(); // Reload data after successful deletion

    });
  }

  copyToClipboard(propertyId: string) {
    navigator.clipboard.writeText(propertyId).then(() => {
      alert("Property ID copied to clipboard");
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }


  searchBar() {

    this.productService.getAllProducts(this.searchTerm, this.page, this.pageSize).subscribe(response => {
      this.products = response.data.dataList; // Get the array of products
      this.count = response.data.count;       // Get the count
    });
  }

  getServerData(data: PageEvent) {
    this.page = data?.pageIndex;
    this.pageSize = data?.pageSize;
    this.loadAllData();
  }
}
