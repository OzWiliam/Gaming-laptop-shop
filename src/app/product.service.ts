import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Array<any>;
  private productsURL = 'http://localhost:3001/product';

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Product []> {
    const path = '';
    return this.http.get<Product[]>(this.productsURL + path)
  };

  getProductById(_id: string): Observable<Product> {
    const path = '';
    return this.http.get<Product>(this.productsURL + path + '/' + _id);
  }

  addProduct(product: Product): Observable<Product> {
    const path = '/insert/add';
    return this.http.post<Product>(this.productsURL + path, product)
  };

  deleteProduct (_id: string ) {
    const path = '/delete';
    return this.http.delete<Product>(this.productsURL + path + '/' + _id);
  }

  updateProduct(product: Product) {
    const path ='/update';
    return this.http.put<Product>(this.productsURL + path + '/' + product._id, product );
  }

}
