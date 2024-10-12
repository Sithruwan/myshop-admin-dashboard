import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

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
  productForm: any;

  onSubmit() {

  }
}
