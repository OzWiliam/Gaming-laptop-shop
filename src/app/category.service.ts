import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "./category";
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categories: Array<any>;
  private categoriesURL = 'http://localhost:3001/category';

  constructor(
    private http: HttpClient,
  ) { }

  getCategories(): Observable<Category []> {
    const path = '';
    return this.http.get<Category[]>(this.categoriesURL + path)
  };

  getCategoryById(_id: string): Observable<Category> {
    const path = '';
    return this.http.get<Category>(this.categoriesURL + path + '/' + _id);
  }

  addCategory(category: Category): Observable<Category> {
    const path = '/insert/add';
    return this.http.post<Category>(this.categoriesURL + path, category)
  };

  deleteCategory(_id: string ): Observable<Category> {
    const path = '/delete';
    return this.http.delete<Category>(this.categoriesURL + path + '/' + _id);
  }

  updateCategory(category: Category): Observable<Category> {
    const path ='/update';
    const updateData = Object.assign({}, category);
    delete (updateData._id);
    return this.http.put<Category>(this.categoriesURL + path + '/' + category._id, updateData );
  }

}
