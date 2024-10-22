import {Component, inject} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductService} from '../../../../services/product/product.service';
import {Product} from '../../../../models/product.model';
import {response} from 'express';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatButton,
    MatDialogClose,
    ReactiveFormsModule
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {

  readonly  dialogRef = inject(MatDialogRef<NewProductComponent>);
  readonly productService = inject(ProductService);


  productForm = new FormGroup({
    qty: new FormControl('', [Validators.required]),
    unitPrice: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });


  onSubmit() {
    const product: Product = new Product(
      Number(this.productForm.value.qty) || 0,
      Number(this.productForm.value.unitPrice) || 0,
      this.productForm.value.description || ''
    );

    this.productService.saveProduct(product).subscribe(response=>{
      this.dialogRef.close(true);
    }, error => {
      console.log(error.message);
    })
  }
}
