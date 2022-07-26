import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private d:DuLieuService) { }
  listLoai:any;
  listSanPham:any;
  listCart:any = 1;

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
  addToCart(item: any) {
    let items = this.d.getItem();
    console.log(this.d.getItem())
    if (items == null) {
      item.soLuong = 1;
      this.d.AddItiem(item)




    } else {
      var a: any = [];
      a = JSON.parse(items) || [];
      var index = a.findIndex((x: any) => x.id_sp == item['id_sp']);
      if (index == -1) {
        item.soLuong = 1;
        a.push(item);
        this.listCart.length++

      } else {
        a[index].soLuong++;
      }
      localStorage.setItem('cart_items', JSON.stringify(a));
      Notify.success('Thêm vào giỏ hàng thành công');
      

    }

  }
            }
