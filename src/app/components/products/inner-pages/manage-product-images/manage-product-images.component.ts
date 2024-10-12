import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from '@angular/common';
import {MatCard, MatCardImage} from '@angular/material/card';

@Component({
  selector: 'app-manage-product-images',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatCard,
    MatCardImage
  ],
  templateUrl: './manage-product-images.component.html',
  styleUrl: './manage-product-images.component.scss'
})
export class ManageProductImagesComponent {
  productForm: any;
  images = [
    { src: 'https://picsum.photos/200', alt: 'Random Image 1' },
    { src: 'https://picsum.photos/200', alt: 'Random Image 2' },
    { src: 'https://picsum.photos/200', alt: 'Random Image 3' },
    { src: 'https://picsum.photos/200', alt: 'Random Image 4' },
    { src: 'https://picsum.photos/200', alt: 'Random Image 5' }
  ];

  onSubmit() {

  }
}
