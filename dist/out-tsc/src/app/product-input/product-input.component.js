import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Product } from "../product";
let ProductInputComponent = class ProductInputComponent {
    constructor(productService) {
        this.productService = productService;
        this.title = "Product";
    }
    ngOnInit() {
    }
    addProduct(name, price, imgPath) {
        const newProduct = new Product();
        newProduct.name = name;
        newProduct.price = price;
        newProduct.imgPath = imgPath;
        if (!name || !price || imgPath) {
            return console.log('underfined');
        }
        this.productService.addProduct(newProduct).subscribe((product) => { this.products.push(product); });
    }
};
ProductInputComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-input',
        templateUrl: './product-input.component.html',
        styleUrls: ['./product-input.component.css']
    })
], ProductInputComponent);
export { ProductInputComponent };
//# sourceMappingURL=product-input.component.js.map