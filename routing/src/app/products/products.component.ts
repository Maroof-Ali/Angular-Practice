import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    "Interactive Media Platform",
    "Property Management Solution",
    "Smart Order",
    "Gateway Plus",
    "Smart City Solutions",
    "eTicketing System Solutions"];


  constructor() { }

  ngOnInit() {
  }

}
