import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../models/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BaseURL = 'http://localhost:8001/api/v1/product';
  constructor(private http: HttpClient) { }

  saveProduct(product : Product):Observable<any>{
     return this.http.post(this.BaseURL, product);
  }
  updateProduct(prodId: String, product : Product):Observable<any>{
    return this.http.put(`${this.BaseURL}/${prodId}`, product);
  }
  getAllProducts(searchText: string, page: number, pageSize: number): Observable<any> {
    const url = `${this.BaseURL}/list?searchText=${searchText}&page=${page}&pageSize=${pageSize}`;

    return this.http.get(url);
  }

  deleteProduct(propertyId: String) {
    const url = `${this.BaseURL}/${propertyId}`;
    return this.http.delete(url);
  }

  productImageUpload(data: FormData, productId: string): Observable<any> {
    return this.http.post(`http://localhost:8001/api/v1/product-images/${productId}`, data);
  }

}
