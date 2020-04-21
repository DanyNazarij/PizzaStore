import { Component, OnInit } from '@angular/core';
import {ProductI, ProductService} from "../services/product.service";
import {DataService} from "../data.service";
import {Subscription} from "rxjs";
import alertify  from 'alertifyjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  dataProducts:any[];
  amountPrice:number = 0;

  constructor(private _dataService:DataService,
              private productService:ProductService) { }




  ngOnInit(): void {
    this._dataService.getProductInCart().subscribe(product=>{
      this.dataProducts = product;
      this.amountPrice = this.dataProducts.reduce((acc, el)=>{
        return acc += el.price * el.count
      }, 0)
    })
  }

  deleteOneItem(id: any, price:number) {
    let idx = this.dataProducts.findIndex(el => el.id == id && el.price == price)
    let oldItem = this.dataProducts[idx];
    let newArrProd = [];
    if(oldItem.count > 1){
      oldItem.count -= 1
      newArrProd = [...this.dataProducts.slice(0, idx), oldItem, ...this.dataProducts.slice(idx+1)]
    }else{
      newArrProd = [...this.dataProducts.slice(0, idx), ...this.dataProducts.slice(idx+1)];
    }
    this._dataService.setProduct(newArrProd);

    this._dataService.getProductInCart().subscribe(cart => {
      localStorage.setItem('cart', JSON.stringify(cart))
    })
    alertify.set('notifier','position', 'top-center');
    alertify.success('Current position : ' + alertify.get('notifier','position'));
    alertify.notify('sample', 'success', 5, function(){  console.log('dismissed'); });
  }
}
