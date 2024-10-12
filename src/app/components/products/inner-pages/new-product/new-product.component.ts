import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';

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
  productForm: any;

  onSubmit() {

  }
}
