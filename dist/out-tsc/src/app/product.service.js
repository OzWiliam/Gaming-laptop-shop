import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Product } from "./product";
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.productsURL = 'http://localhost:3001/product';
    }
    getProducts() {
        const path = '';
        return this.http.get(this.productsURL + path);
    }
    ;
    addProduct(product) {
        const path = '/insert/add';
        return this.http.post(this.productsURL + path, Product);
    }
    ;
};
ProductService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map