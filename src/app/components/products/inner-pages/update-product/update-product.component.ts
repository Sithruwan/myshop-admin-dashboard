import {Component, inject, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product.model';



@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogClose,
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {
  product: any;
  productForm: FormGroup;
  readonly productService = inject(ProductService);
  constructor(public dialogRef: MatDialogRef<UpdateProductComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.product = data.product;  // Retrieve the passed product object
    console.log(this.product);
    // Initialize the form after product is assigned
    this.productForm = new FormGroup({
      productId: new FormControl(this.product.propertyId, [Validators.required]),
      qty: new FormControl(this.product.qty, [Validators.required]),
      unitPrice: new FormControl(this.product.unitPrice, [Validators.required]),
      description: new FormControl(this.product.description, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const prodId = this.productForm.value.productId;
      const obj = new Product(this.productForm.value.qty, this.productForm.value.unitPrice, this.productForm.value.description);
      this.productService.updateProduct(prodId,obj).subscribe(response=>{
        console.log(this.productForm.value);
        this.dialogRef.close('updated');
      })

    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
