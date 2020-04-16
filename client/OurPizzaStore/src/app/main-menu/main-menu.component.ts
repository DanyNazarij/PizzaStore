import { Component, OnInit } from '@angular/core';
import {ProductI, ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  products:ProductI[] = []




  constructor(private productService:ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(res=>{
      this.products = res;
      console.log(this.products);
    })


  }



}
