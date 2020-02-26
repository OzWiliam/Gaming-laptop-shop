import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProductListComponent = class ProductListComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this.productService.getProducts().subscribe((products) => {
            console.log('### Product ', products);
            this.products = products;
        });
    }
};
ProductListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-list',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css']
    })
], ProductListComponent);
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map