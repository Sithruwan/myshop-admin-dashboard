import {Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {ProductService} from '../../../../services/product/product.service';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    ReactiveFormsModule,
    MatIcon
  ],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss'
})
export class DeleteProductComponent {
  readonly productService = inject(ProductService);

  constructor(

    private dialogRef: MatDialogRef<DeleteProductComponent> // Inject MatDialogRef
  ) {}
  deleteProduct() {

      this.dialogRef.close('deleted');

  }
}
