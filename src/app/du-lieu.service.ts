import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart,Carts } from './Cart';


@Injectable({
  providedIn: 'root'
})
export class DuLieuService {

  constructor(private h:HttpClient) { }
  items = [];

  AddLoai(data:any){
    return this.h.post('https://nodekhiem.herokuapp.com/api/loai',data);
  }
  getLoai(){
    return this.h.get('https://nodekhiem.herokuapp.com/api/loai');
  }
  AddSanPham(data:any){
    return this.h.post('https://nodekhiem.herokuapp.com/api/sanpham',data);
  }
  getSanPham(){
    return this.h.get('https://nodekhiem.herokuapp.com/api/sanpham');
  }
  AddItiem(item:any){
    let existingItems = localStorage.getItem('cart_items')
    // item:Cart['so_luong'] = '2';
    localStorage.setItem('cart_items', JSON.stringify([item]));
    console.log(existingItems)
  }
  getItem(){
    return localStorage.getItem('cart_items')
  }
  

}
