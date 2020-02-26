import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductInputComponent } from "./product-input/product-input.component";
const routes = [
    { path: '', redirectTo: '/productlist', pathMatch: 'full' },
    { path: 'productlist', component: ProductListComponent },
    { path: 'productinput', component: ProductInputComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map