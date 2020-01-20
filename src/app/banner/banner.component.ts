import { Component, OnInit } from '@angular/core';
import { Category } from "../category";
import { CategoryService } from "../category.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
