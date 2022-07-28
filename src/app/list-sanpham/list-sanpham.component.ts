import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Cart } from '../Cart';

@Component({
  selector: 'app-list-sanpham',
  templateUrl: './list-sanpham.component.html',
  styleUrls: ['./list-sanpham.component.css']
})
export class ListSanphamComponent implements OnInit {

  constructor(private d:DuLieuService) { }
  listLoai:any;
  listSanPham:any;
  listCart:any;

  ngOnInit(): void {
    this.listLoai = this.d.getLoai().subscribe ( 
      data => this.listLoai= data
      );
    this.listSanPham = this.d.getSanPham().subscribe ( 
      data => this.listSanPham= data
      );

    this.listCart = JSON.parse(this.d.getItem() || '')

  }
  addToCart(item: any) {
    let items = this.d.getItem();
    console.log(this.d.getItem())
    if (items == null) {
      item.soLuong = 1;
      this.d.AddItiem(item)
      alert("Thêm Vào Giỏ Hàng Thành Công!")

    } else {
      var a: any = [];
      a = JSON.parse(items) || [];
      var index = a.findIndex((x: any) => x.id_sp == item['id_sp']);
      if (index == -1) {
        item.soLuong = 1;
        a.push(item);
      } else {
        a[index].soLuong++;
      }
      localStorage.setItem('cart_items', JSON.stringify(a));
      alert("Thêm Vào Giỏ Hàng Thành Công!")
      
    }

  }

}
