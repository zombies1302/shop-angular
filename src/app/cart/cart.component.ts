import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private d:DuLieuService,private router:Router) { }
  listLoai:any;
  listCart:any;

  thanhtien:number = 0
  
  ngOnInit(): void {
    this.listLoai = this.d.getLoai().subscribe ( 
      data => this.listLoai= data
      );
    this.listCart = JSON.parse(this.d.getItem() || '')
    this.thanhtien = this.listCart.reduce((acc: any, curr: any) => acc + curr.soLuong * curr.gia_ban, 0);
    // console.log(this.total)

  }
  removeFromCart(id:number){
    let data = this.listCart
    let index = data.findIndex((x: any) => x.id_sp == id);
    console.log(index)
    if (index > -1) {
      data.splice(index,1)
      console.log(data)
    }
    localStorage.setItem('cart_items', JSON.stringify(data));
    this.thanhtien = this.listCart.reduce((acc: any, curr: any) => acc + curr.soLuong * curr.gia_ban, 0);





  }



}
