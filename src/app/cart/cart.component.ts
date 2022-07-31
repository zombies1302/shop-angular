import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
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
  total:any;
  thanhtien:number = 0
  
  ngOnInit(): void {
    this.listLoai = this.d.getLoai().subscribe ( 
      data => this.listLoai= data
      );
    this.listCart = JSON.parse(this.d.getItem() || '')
    this.total = this.listCart.forEach(
      (data:any)=>{
        this.thanhtien += (data.soLuong * data.gia_ban)
        // console.log(this.thanhtien)
        return this.thanhtien
      })
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
    this.router.navigate(['/cart']);
    console.log(this.total)

  }



}
