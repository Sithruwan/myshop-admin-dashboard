import {Component, inject, Inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgOptimizedImage} from '@angular/common';
import {MatCard, MatCardImage} from '@angular/material/card';
import {ProductService} from '../../../../services/product/product.service';

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
export class ManageProductImagesComponent implements OnInit {
  loading: boolean = false;

  product: any;
  readonly productService = inject(ProductService);
  productImageForm = new FormGroup({
    image: new FormControl(null,Validators.required)
  });

  image: any;

  ngOnInit() {
      console.log(this.data.product.propertyId);
  }

  constructor(public dialogRef: MatDialogRef<ManageProductImagesComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.image = fileInput.files[0];

      // Validate file size
      if (!this.isFileSizeValid(this.image)) {
        console.error('File size exceeds the 5MB limit');
        this.image = null;
        fileInput.value = ''; // Reset the file input
        return;
      }

      // Validate file type
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'pdf'];
      const fileExtension = this.image.name.split('.').pop()?.toLowerCase();
      if (fileExtension && !allowedExtensions.includes(fileExtension)) {
        console.error('Invalid file type');
        this.image = null;
        fileInput.value = ''; // Reset the file input
        return;
      }

      // Handle and preview the file
      this.handleFile(this.image);
      console.log("File selected successfully:", this.image);
    } else {
      console.error('No file selected');
    }
  }

  onSubmit() {
    if (this.image instanceof File) {  // Ensure `this.image` is of type `File`
      const formData = new FormData();
      formData.append('productImageFile', this.image, this.image.name);

      // Call the service method to upload the image
      this.productService.productImageUpload(formData, this.data.product.propertyId)
        .subscribe(response => {
          console.log('Upload successful:', response);
        }, error => {
          console.error('Upload failed:', error);
        });
    } else {
      console.error('No valid file selected');
    }
  }


  isFileSizeValid(file: File): boolean {
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB in bytes
    return file.size <= maxSizeInBytes;
  }
  handleFile(file: File) {
    // Optionally, you can still use FileReader for preview purposes,
    // but do not modify this.image to a base64 string.
    const reader = new FileReader();
    reader.onload = () => {
      // You can use reader.result to display a preview without altering this.image.
      //console.log("File preview:", reader.result);
    };
    reader.readAsDataURL(file); // Convert file to Base64 for preview, if needed
  }





}
