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
      } else {
        a[index].soLuong++;
      }
      localStorage.setItem('cart_items', JSON.stringify(a));
    }

  }
//   addToCart(item:any){
//     let items = this.d.getItem();
//     if(items == null){
//       item.soLuong = 1;
//       this.d.AddItiem(item)
//       console.log(this.d.getItem())

//     }else{
//       var a:any = [];
//       a = JSON.parse(items) || [];
//       console.log(item['id_sp'])
//       // console.log(items[])
//       a.find((data:any,index:number)=>{
//         if(item['id_sp'] == data.id_sp){
//           var sl = data.soLuong;
//           sl++
//           item.soLuong = sl
//           a.splice(index,1)
//           a.push(item)
//           localStorage.setItem('cart_items', JSON.stringify(a));
//         }else{
//           item.soLuong = 1;
//           a.push(item)
//           // console.log(a)
//           localStorage.setItem('cart_items', JSON.stringify(a));

//         }
// })}    }


  }
