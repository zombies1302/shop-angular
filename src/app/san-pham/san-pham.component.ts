import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';


@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})
export class SanPhamComponent implements OnInit {

  constructor(private d:DuLieuService) { }
  listLoai:any;
  listSanPham:any;

  ngOnInit(): void {
    this.listLoai = this.d.getLoai().subscribe ( 
      data => this.listLoai= data
      );
    this.listSanPham = this.d.getSanPham().subscribe ( 
      data => this.listSanPham= data
      );
  }
  spThem(data:any){
    let tensp = data.tenSP;
    let gia_nhap = data.giaNhap;
    let gia_ban = data.giaBan;
    let images = data.hinh;
    let mota = data.mota;
    let maLoai = data.loai;
    let date = data.date;
    const    arrData = {
      tensp:tensp,
      giaNhap:gia_nhap,
      giaBan:gia_ban,
      images:images,
      mota:mota,
      maLoai:maLoai,
      date:date
    }

    this.d.AddSanPham(arrData).subscribe ( data => alert('Thêm thành công'));
  }

}
