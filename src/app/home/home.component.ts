import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Cart } from '../Cart';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private d:DuLieuService) { }
  listLoai:any;
  listSanPham:any;
  listCart:any;

  // items = [];


  ngOnInit(): void {
    this.listLoai = this.d.getLoai().subscribe ( 
      data => this.listLoai= data
      );
    this.listSanPham = this.d.getSanPham().subscribe ( 
      data => this.listSanPham= data
      );

    this.listCart = JSON.parse(this.d.getItem() || '')

    // console.log()

  }
  addToCart(item:Cart){
    let items = this.d.getItem();
    if(items == null){
      this.d.AddItiem(item)
      console.log(this.d.getItem())

    }else{
      var a = [];
      a = JSON.parse(items) || [];
      a.push(item)
      localStorage.setItem('cart_items', JSON.stringify(a));

    }
    // this.d.AddItiem(item)
    // if (!this.d.itemInCart(item)) {
      //     item.qtyTotal = 1;
      //     this.d.addToCart(item); //add items in cart
      //     this.items = [...this.d.getItems()];
      //   }



    }


  }
