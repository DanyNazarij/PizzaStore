import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductI, ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  page: number = 1;
  private getCart: Subscription;

  products:ProductI[] = []
  pricePizza: number;

  filter:string = '';



  constructor(private productService:ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private _dataService: DataService) { }


  ngOnInit(): void {

    this.productService.getProducts().subscribe(res=>{
      this.products = res;
      console.log(this.products)
    })

  }


  setPrice(value: any, id) {
    let price = document.getElementById(id);
    price.textContent = value;
  }

  setFilter(s: string) {
    this.filter = s;
  }

  addToCart(_id: string) {
    let element = document.getElementById(_id);

    const productInCartObj = {
      id: _id,
      price: element.textContent,
      name: element.getAttribute('data-name'),
      count: 1
    }
    let arrProducts = [];
    this.getCart = this._dataService.getProductInCart().subscribe(cart => arrProducts = cart)
    let idx = arrProducts.findIndex(el=> el.price == productInCartObj.price && productInCartObj.id == el.id)
    if(idx < 0){
      arrProducts.push(productInCartObj)
    }else{
      arrProducts[idx].count += 1
    }
    this._dataService.setProduct(arrProducts);
    this.getCart = this._dataService.getProductInCart().subscribe(cart => {
      arrProducts = cart
      console.log('here')
      localStorage.setItem('cart', JSON.stringify(cart))
    })




  }
}
