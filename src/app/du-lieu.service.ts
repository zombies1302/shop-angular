import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DuLieuService {
  host:string = "https://nodekhiem.herokuapp.com/"
  constructor(private h:HttpClient) { }
  AddLoai(data:any){
    return this.h.post(`${this.host}loai`,data);
  }
  getLoai(){
    return this.h.get(`${this.host}api/loai`);
  }
  AddSanPham(data:any){
    return this.h.post(`${this.host}api/sanpham`,data);
  }
  getSanPham(){
    return this.h.get(`${this.host}api/sanpham`);
  }
  signUp(data:any){
    return this.h.post(`http://localhost:3000/api/signup`,data)
  }
  AddItiem(item:any){
    let existingItems = localStorage.getItem('cart_items')
    // item:Cart['so_luong'] = '2';
    localStorage.setItem('cart_items', JSON.stringify([item]));
    alert("Thêm Vào Giỏ Hàng Thành Công!")

  }
  getItem(){
    return localStorage.getItem('cart_items')
  }
  

}
