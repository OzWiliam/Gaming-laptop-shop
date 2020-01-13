import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsURL= 'http://localhost:3001/product'

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Product []> {
    const path ='';
    return this.http.get<Product[]>(this.productsURL + path)
  };

  addProduct(product: Product): Observable<Product> {
    const path = '/insert/add'
    return this.http.post<Product>(this.productsURL + path, product)
  };
}
